const express = require("express");

const dataBase = require("./data/database");
const router = require("./router/quote.router");

const app = express();

app.use("/quote", router);

app.use(function (error, req, res, next) {
  res.status(500).json({ message: "something went wrong" });
});

dataBase
  .connect()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("connection to the database failed");
  });
