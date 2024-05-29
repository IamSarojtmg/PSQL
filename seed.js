const db = require('./db/connection')
const format = require('pg-format')

function seed({localStudents}) {
    return db.query("DROP TABLE IF EXISTS student").then(()=>{

    })
}

function createStudnetTable(){
    return db.query(
        
    )
}