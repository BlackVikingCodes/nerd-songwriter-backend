require('dotenv').config({path: './config/.env'})


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

const rootRoute = require('./routes/root')
const songRoutes = require('./routes/songs')
const userRoutes = require('./routes/user')
const connectDB = require('./config/database')
const allowedOrigins = require('./config/allowedOrigins')

// express app
const app = express()


// CORS
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
    } else {
        callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
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

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
      res.json({ message: '404 Not Found' })
  } else {
      res.type('txt').send('404 Not Found')
  }
})

// connect to db
connectDB()


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})