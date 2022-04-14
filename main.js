const http = require("http");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./db.json", `utf-8`));

var server = http.createServer((req, res) => {
  if (req.url == "/books") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/HTML" });
    res.write("HELLO FROM SERVER");
    res.end();
  }
});

const Port = 8000;
server.listen(Port, () => {
  console.log("Server started");
});
