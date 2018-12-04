var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser= require('body-parser');



var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var signUpRouter = require('./routes/signup');
var usersRouter = require('./routes/users');

var app = express();


app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signUpRouter);
app.use('/users', usersRouter);

module.exports = app;
