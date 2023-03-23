require('dotenv').config()
const express = require ('express')
const cors = require ('cors')
const app = express()
const PORT = process.env.PORT
app.use(cors())
app.use(express.json())

const {dbConnect} = require("./Config/mongo")

app.use('/api/1.0', require('./App/routes/index'))

dbConnect()
app.listen(PORT,()=>{
    console.log('API lista por el puerto', PORT)
}) 