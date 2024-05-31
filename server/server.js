import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import 'dotenv/config'
import userRoutes from './routes/userRoutes.js'

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

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

//routes
app.use('/api', userRoutes)