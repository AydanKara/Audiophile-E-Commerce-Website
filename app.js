const express = require("express");
const path = require("path");

const api = express();
const db = require("./data/database");
const authRoutes = require("./routes/auth.routes");

api.set("view engine", "ejs");
api.set("views", path.join(__dirname, "views"));

api.use(express.static("public"));
api.use(express.static("assets"));
api.use(express.urlencoded({ extended: false }));
api.use(authRoutes);

db.connectToDatabase()
  .then(function () {
    api.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to database!");
    console.log(error);
  });
