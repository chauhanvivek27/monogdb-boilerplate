const express = require('express');
const app = express();
const rootRouter = require('./routes');

// routes
app.use('/', rootRouter);
 
module.exports = app;