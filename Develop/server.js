//open up express
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./models");
const { Router } = require("express");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
  useNewUrlParser: true
});

// app.get("/", (req, res) => {
//   db.Exercise.find({})
//     .then(dbExercise => {
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.use(require("./Routes/htmlRoutes"));
app.use(require("./Routes/apiRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
