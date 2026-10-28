require('dotenv').config() 

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())
const bookRoute = require('./route/libraryRoute')
const dbconnection = require('./db/db.js')
app.use('/api',bookRoute)
async function startServer(){
    try{
        await dbconnection()
        app.listen(PORT,()=>{
            console.log("Server is listening.....")
        })
    }catch(error){
        console.log("Server failed to run")
        console.log(error)
    }
}
startServer()
