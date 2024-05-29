const {seed} = require("./seed");
const db = require("./db/connection.js");
const data = require("./data/index.js");

seed(data).then(() => {
  return db.end();
});
