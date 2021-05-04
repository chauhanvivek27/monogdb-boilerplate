const express = require('express');
const morgan = require('morgan');
const handleErrors = require('./middleware/handleerror');

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.use(handleErrors);

require('./routes')(app);

module.exports = app;