const express = require('express')
var rootRouter = express.Router();

const userRouter = require('./user');

rootRouter.use('/user', userRouter);

module.exports = rootRouter;