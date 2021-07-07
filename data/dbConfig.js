const knex = require("knex");
const configOptions = require("../knexfile.js");
const db = knex(configOptions.development);

function find() {
  return db("accounts");
}
function findById(id) {
  return db("accounts").where({ id });
}
function insert(accountData) {
  return db("accounts").insert(accountData);
}
function update(id, accountData) {
  return db("accounts")
    .where({ id })
    .update(accountData);
}
function remove(id) {
  return db("accounts")
    .where({ id })
    .del();
}

module.exports = { find, findById, insert, update, remove };
