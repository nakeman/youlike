// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

import createError from 'http-errors';
import express from 'express';
import path from 'path';
// import bodyParser from 'body-parser';
// import session from 'express-session';
import logger from 'morgan';
//

import './database.js'; // 何时何处创建：异步链接，似乎程序初始化时链接，和使用前链接无区别
//import {init_passport,init_session} from "./UserAuthentication.js"

//import indexRouter from './routes/index.js';
//import usersRouter from './users/router.js';


// import { dirname, filename } from 'dirname-filename-esm';
import { dirname} from 'dirname-filename-esm';

const __dirname = dirname(import.meta);
// const __filename = filename(import.meta);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/build')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.get('/api', function (req, res) {
  res.json({ message: "Hello, i am youlike server!" });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
