const {Router} = require('express')
const {getStudents,getStudentsById, addStudent, deleteStudent,updateStudent} = require('./controller')

const router = Router()

router.get('/',getStudents)
router.post('/',addStudent)
router.get('/:id',getStudentsById )
router.delete('/:id', deleteStudent)
router.put('/:id', updateStudent)




module.exports = router