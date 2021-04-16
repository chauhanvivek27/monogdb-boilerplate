const express = require('express');
const app = express();
var rootRouter = require('./routes');

// routes
app.use('/', rootRouter);
 
module.exports = app;