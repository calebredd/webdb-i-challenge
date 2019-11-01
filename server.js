const express = require("express");

const Accounts = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  Accounts.find()
    .then(accounts => {
      res.status(200).json({ accounts });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Could not access database" })
    );
});

module.exports = server;
