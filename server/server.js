import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import cookieParser from "cookie-parser"
import 'dotenv/config'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'

const app = express()

const PORT = process.env.PORT

app.use(cors({origin: 'http://localhost:5173', credentials: true, methods: 'GET, POST, PATCH, DELETE'}))
app.use(express.json())
app.use(cookieParser())


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
app.use('/api', postRoutes)
