const knex = require("knex");
const configOptions = require("../knexfile.js");
const db = knex(configOptions.development);

function find() {
  return db("accounts");
}

module.exports = { find };
