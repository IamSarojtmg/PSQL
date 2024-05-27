const pool = require('./db')
const queries = require('./queries')
// const fetchStudents = require('../student/model')

const getStudents = (req,res)=>{
    // fetchStudents().then((data)=>{
    //     res.status(200).send(data)
    // })
    pool.query(queries.getStudents,(error, results)=>{
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getStudentsById = (req, res) =>{
    const {id} = req.params
    console.log(id);
    pool.query(queries.getStudentById,[id], (error,results)=>{
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getStudents,
    getStudentsById
}