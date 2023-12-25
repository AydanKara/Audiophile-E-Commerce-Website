const express = require("express");
const path = require("path");

const api = express();
const authRoutes = require("./routes/auth.routes");

api.set("view engine", "ejs");
api.set("views", path.join(__dirname, "views"));

api.use(express.static("public"))
api.use(authRoutes);

api.listen(3000);