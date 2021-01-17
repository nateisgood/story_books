const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//load config
//port in config file
dotenv.config({ path: './config/config.env' })

const app = express()

connectDB()

const PORT = process.env.PORT

app.listen(
    PORT,
    console.log(`running on ${process.env.NODE_ENV} mode on port ${PORT}`)
)