const getStudents = "SELECT * FROM student"
const getStudentById = "SELECT * FROM student where id = $1"

module.exports = {getStudents, getStudentById}