const express = require('express')
require("./src/db/mongoose")


const app = express()
const port = 3000


app.use(express.json()) 


const flightRouter = require('./src/routers/flight') 
app.use(flightRouter) 


app.listen(port, (req, res)=>{
    console.log('server is up on port ' + port)
})