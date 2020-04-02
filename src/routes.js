const express = require("express");
const axios = require("axios");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const base = await axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log(error);
    });

  return res.render("index.html", { base });
});

module.exports = routes;

// let seen = {};
// let uniqChar = base.filter(function(item) {
//   if (seen.hasOwnProperty(item.status)) {
//     return false;
//   } else {
//     seen[item.status] = true;
//     console.log(seen);
//     return true;
//   }
// });
