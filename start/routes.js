const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const ping = require("./../routes/ping");
const index = require("./../routes/index");

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.set("views", path.join(__dirname, "./../views"));
  app.set("view engine", "pug");
  app.use("/pug", index);
  app.use("/ping", ping);
};
