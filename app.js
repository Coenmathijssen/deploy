require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')
mongoose.connect('mongodb://' + process.env.HOST + '/' + process.env.DATABASE_NAME, { useNewUrlParser: true })

// Init Express
const app = express()
const port = process.env.PORT

// Know which port Express is using
app.listen(port, () => console.log(`Listining to this port: ${port}!`))

// View Engine init
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//  Serve html, css and js files in the static directory
app.use(express.static(path.join(__dirname, 'static')))

// Access the images uploaded by the user without removing the static/ in the url
app.use('/static', express.static('static'))

// Init bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Init flash
app.use(flash())

// Session init
app.use(session({ secret: process.env.SESSION_KEY, resave: false, saveUninitialized: true }))

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_KEY,
  port: process.env.PORT,
  secure: false
}))

/*  Import and use all my different routes and render them in this file (app.js). With this method, everything is neatly seperated.
Which will make it cleaner, more understandable and better scalable.  */
const register = require('./routes/register.js')
const login = require('./routes/login.js')
const logout = require('./routes/logout.js')
const update = require('./routes/update.js')
const deleteUser = require('./routes/delete.js')
const renderPages = require('./routes/render-pages.js')
app.use(register)
app.use(login)
app.use(logout)
app.use(update)
app.use(deleteUser)
app.use(renderPages)
