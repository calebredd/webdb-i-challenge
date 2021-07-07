const express = require("express");

const Accounts = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/api", (req, res) => {
  Accounts.find()
    .then(accounts => {
      res.status(200).json({ accounts });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Could not access database" })
    );
});
server.get("/api/:id", (req, res) => {
  const { id } = req.params;
  Accounts.findById(id)
    .then(account => {
      res.status(200).json({ account });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Could not access database" })
    );
});

server.post("/api", (req, res) => {
  const accountData = req.body;
  Accounts.insert(accountData)
    .then(account => {
      res.status(200).json({ account });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Could not access database" })
    );
});

server.put("/api/:id", (req, res) => {
  const { id } = req.params;
  const accountData = req.body;
  Accounts.update(id, accountData)
    .then(account => {
      res.status(200).json({ account });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Could not access database" })
    );
});

server.delete("/api/:id", (req, res) => {
  const { id } = req.params;
  Accounts.remove(id)
    .then(account => {
      res.status(200).json({ account });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Could not access database" })
    );
});

module.exports = server;
