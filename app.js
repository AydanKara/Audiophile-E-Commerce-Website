const express = require("express");
const path = require("path");
const csrf = require("csurf");
const expressSession = require("express-session");
const dotEnv = require("dotenv").config();

const createSessionConfig = require("./config/session");
const db = require("./data/database");
const addCsrfTokenMiddleware = require("./middlewares/csrf-token");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const checkAuthStatusMiddleware = require("./middlewares/check-auth");
const cartMiddleware = require("./middlewares/cart");
const authRoutes = require("./routes/auth.routes");
const productsRoutes = require("./routes/products.routes");
const baseRoutes = require("./routes/base.routes");
const adminRoutes = require("./routes/admin.routes");
const cartRoutes = require("./routes/cart.routes");

const api = express();

api.set("view engine", "ejs");
api.set("views", path.join(__dirname, "views"));

api.use(express.static("public"));
api.use(express.static("assets"));
api.use(express.urlencoded({ extended: false }));
api.use(express.json());

const sessionConfig = createSessionConfig();
api.use(expressSession(sessionConfig));
api.use(csrf());

api.use(cartMiddleware);

api.use(addCsrfTokenMiddleware);
api.use(checkAuthStatusMiddleware);

api.use(baseRoutes);
api.use(authRoutes);
api.use(productsRoutes);
api.use("/cart", cartRoutes);
api.use("/admin", adminRoutes);

api.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    api.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to database!");
    console.log(error);
  });
