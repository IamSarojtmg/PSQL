const express = require('express')
const studentRoutes = require('./src/student/routes')
require('dotenv').config({ path: '.env.production' }); // Load environment variables from.env.production


const app = express()
// const port = 3000

app.use(express.json())

app.get('/',(req, res)=>{
res.send('Welcome to my APi')
})

app.use('/api/v1/students', studentRoutes)

// app.listen(port, ()=>{
//     console.log(`listening on ${port}`);
// })

module.exports = app