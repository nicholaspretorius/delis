const express = require("express");
const bodyParser = require("body-parser");
const ping = require("./../routes/ping");

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use("/ping", ping);
};
