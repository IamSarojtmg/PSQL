const db = require("./db/connection");
const format = require("pg-format");

function seed({ localStudents }) {
  return db.query("DROP TABLE IF EXISTS student").then(() => {
    return createStudentTable();
  });
}

function createStudentTable() {
  return db.query(
    `CREATE TABLE student
        (ID SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            age INT,
            dob DATE;
        )`
  );
}

module.exports = seed