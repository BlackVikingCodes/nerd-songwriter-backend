require('dotenv').config({path: './config/.env'})


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

const rootRoute = require('./routes/root')
const songRoutes = require('./routes/songs')
const userRoutes = require('./routes/user')
const connectDB = require('./config/database')

// express app
const app = express()

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


// CORS
app.use(cors({
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
))


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
app.use('/', rootRoute)
app.use('/api/songs', songRoutes)
app.use('/api/user', userRoutes)



// connect to db
connectDB()


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})