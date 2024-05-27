const pool = require("./db");
const queries = require("./queries");
// const fetchStudents = require('../student/model')

const getStudents = (req, res) => {
  // fetchStudents().then((data)=>{
  //     res.status(200).send(data)
  // })
  pool.query(queries.getStudents, (error, results) => {
    console.log("getstudents");
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

const getStudentsById = (req, res) => {
  console.log("getstudentsbyid");
  const { id } = req.params;
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  pool.query(queries.checkEmailExists, [email], (error, results) => {
    console.log(results.rows.length);
    if (results.rows.length) {
      res.send("email already exists");
    }
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        console.log("new student details adding");
        if (error) throw error;
        res.status(201).send("Student created");
      }
    );
  });
};

const deleteStudent = (req, res) => {
  const { id } = req.params;

  pool.query(queries.getStudentById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send("No students found to delete");
    }

    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student removed");
    });
  });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    if (!(results.rows.length)) {
      res.send("Student does not exists");
    }
    pool.query(queries.updateStudent, [name, id], (error,results)=>{
        if (error) throw error
        res.status(200).send("student updated")
    })
  });
};

module.exports = {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudent,
  updateStudent,
};
