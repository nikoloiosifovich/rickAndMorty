const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");

const server = express();

server.use(express.static(__dirname + "/public"));

nunjucks.configure(__dirname + "/views", {
  express: server,
  noCache: true
});

server.use(routes);

server.listen(3333);
