const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static(__dirname + "/public"));

nunjucks.configure(__dirname + "/views", {
  express: server,
  noCache: true
});

server.get("/", (req, res) => {
  return res.render("index.html");
});

server.listen(3333);
