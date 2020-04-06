const express = require("express");
const axios = require("axios").default;

const routes = express.Router();

axios
  .all([
    axios.get("https://rickandmortyapi.com/api/character/?status=alive"),
    axios.get("https://rickandmortyapi.com/api/character/?status=dead"),
    axios.get("https://rickandmortyapi.com/api/character/?status=unknown"),
  ])
  .then(
    axios.spread(async (alive, dead, unknown) => {
      this.alive = await alive.data.results;
      this.dead = await dead.data.results;
      this.unknown = await unknown.data.results;

      routes.get("/", async (req, res) => {
        this.query = req.headers["x-char"];

        if (!this.query) {
          this.home = await [this.alive[0], this.dead[1], this.unknown[0]];
          res.render("index.html", { base: this.home });
        } else {
          res.redirect("/character");
        }
      });

      routes.get("/character", async (req, res) => {
        if (this.query === "alive") {
          this.status = await this.alive;
        } else if (this.query === "dead") {
          this.status = await this.dead;
        } else if (this.query === "unknown") {
          this.status = await this.unknown;
        } else {
          this.query = undefined;
          res.redirect("/");
        }
        res.render("status.html", { base: this.status });
      });
    })
  );

module.exports = routes;
