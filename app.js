require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var watsonRouter = require('./routes/watson-assistant');
var hpiRouter = require('./routes/hpi')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/watson', watsonRouter);
app.use('/hpi', hpiRouter);

module.exports = app;
