const express = require("express");
const axios = require("axios");

const routes = express.Router();

const baseUrl = "https://rickandmortyapi.com/api/character/";

let alive = [];
let dead = [];
let unknown = [];

routes.get("/", async (req, res) => {
  alive = await axios
    .get(baseUrl + "?status=alive")
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log(error);
    });

  dead = await axios
    .get(baseUrl + "?status=dead")
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log(error);
    });

  unknown = await axios
    .get(baseUrl + "?status=unknown")
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log(error);
    });

  const base = [alive[0], dead[1], unknown[0]];

  return res.render("index.html", { base });
});

routes.get("/character", (req, res) => {
  const { status } = req.query;
  let toRender = [];

  if (status === "alive") {
    toRender = [...alive];
  } else if (status === "dead") {
    toRender = [...dead];
  } else if (status === "unknown") {
    toRender = [...unknown];
  }

  return res.render("status.html", { base: toRender }); // chage this to status-page
});

module.exports = routes;
