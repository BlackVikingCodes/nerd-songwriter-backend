require('dotenv').config({path: './config/.env'})


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')


const songRoutes = require('./routes/songs')
const userRoutes = require('./routes/user')
const connectDB = require('./config/database')

// express app
const app = express()


// CORS
app.use(cors({
  origin: "*",
}))


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))


//Either use this piece of code or use morgan
/* 
  app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  }) 
*/

// routes
app.use('/api/songs', songRoutes)
app.use('/api/user', userRoutes)

// connect to db
connectDB()


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})