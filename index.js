const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://admin:12345@192.168.80.2:27017/?authSource=admin")
  .then(() => console.log("succesfully connected to DB"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("<h2> Its Development environment </h2>");
});

const port = process.env.port || 3000;

app.listen(port, () => console.log('listening on port ${3000}'));

