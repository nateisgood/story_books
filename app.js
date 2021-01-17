const path = require('path') //standard node js lib
const express = require('express') // main app library
const dotenv = require('dotenv') // for config files 
const morgan = require('morgan') // logger
const connectDB = require('./config/db') // mongo-connect
const expressHandlebars = require('express-handlebars') // 

//load config
//port in config file
dotenv.config({ path: './config/config.env' })

// main app
const app = express()

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// logging
app.use(morgan('dev'))

// db
connectDB()

// handlebars template engine
app.engine(
    '.hbs',
    expressHandlebars({
        defaultLayout: 'main',
        extname: '.hbs'
    })
)
app.set('view engine', '.hbs')

// routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT

app.listen(
    PORT,
    console.log(`running on ${process.env.NODE_ENV} mode on port ${PORT}`)
)