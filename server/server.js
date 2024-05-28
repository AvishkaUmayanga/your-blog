import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(PORT, ()=>{
            console.log(`listening on port ${PORT}`)
        })
    })
    .catch((errorr)=>{
        console.log(errorr)
    })