const express = require("express");
const base = require("./database/characters.json");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.render("index.html", { base });
});

module.exports = routes;
