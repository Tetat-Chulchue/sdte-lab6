const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.status(400).send("Hello world!");
});

module.exports = app;
