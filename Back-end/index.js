const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = mongoose.connect("mongodb://localhost/gameAPI");

const port = process.env.PORT || 5000;
const Game = require("./models/game.models");
const bodyParser = require("body-parser");
const gameRouter = require("./routes/game.route")(Game);

const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", gameRouter);

app.get("/", (req, res) => {
  res.send("Bai tap lon mon mang may tinh");
});
app.server = app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
module.exports = app;
