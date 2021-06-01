//Dependencies
const express = require('express')
const http = require('http')
const morgan = require('morgan')
const path = require('path')
const exphbs = require('express-handlebars')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const MySQLStore = require('express-mysql-session')(session)
const five = require('./lib/five')
require('dotenv').config()

//Variables statements
const { database } = require('./config/keys')

//Initializations
const app = express()
const server = http.Server(app)
require('./lib/passport')
five(server)

//Settings
app.set('port', process.env.PORT || 5000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

//Global variables
app.use((req, res, next) => {
    app.locals.message = req.flash('message')
    app.locals.success = req.flash('success')
    app.locals.user = req.user
    next()
})

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(require('./routes/index.route'));
app.use(require('./routes/auth.route'));
app.use(require('./routes/home.route'));
app.use(require('./routes/room.route'));

//Admin routes
app.use(require('./routes/admin.dash.route'));
app.use(require('./routes/admin.admin.route'));
app.use(require('./routes/admin.super.route'));
app.use(require('./routes/admin.user.route'));

//Starting
server.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})