//SSL Certificate
const fs = require("fs");
const key = fs.readFileSync("./localhost/localhost.decrypted.key");
const cert = fs.readFileSync("./localhost/localhost.crt");

const express = require("express");
const app = express();

const port = 3000;

const https = require("https");
const server = https.createServer({ key, cert }, app);

//WebAPI
app.get("/", (req, res, next) => {
  res.status(200).send("Hello world!");
});

server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});
