const express = require("express");
const movies = require("../routes/movie");
const cors = require("cors");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.static("public"));
  app.use(cors());

  app.use("/api/movie", movies);
};
