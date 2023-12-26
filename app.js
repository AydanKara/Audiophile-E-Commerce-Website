const express = require("express");
const path = require("path");
const csrf = require("csurf");
const expressSession = require("express-session");

const createSessionConfig = require("./config/session");
const db = require("./data/database");
const addCsrfTokenMiddleware = require("./middlewares/csrf-token");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const authRoutes = require("./routes/auth.routes");

const api = express();

api.set("view engine", "ejs");
api.set("views", path.join(__dirname, "views"));

api.use(express.static("public"));
api.use(express.static("assets"));
api.use(express.urlencoded({ extended: false }));

const sessionConfig = createSessionConfig();
api.use(expressSession(sessionConfig));
api.use(csrf());

api.use(addCsrfTokenMiddleware);
api.use(authRoutes);
api.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    api.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to database!");
    console.log(error);
  });
