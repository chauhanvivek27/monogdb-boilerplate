const express = require('express')
let router = express.Router();

module.exports = function(app){
    app.get('/user', function (req, res) {
        res.send('User Dashboard Page');
    });

    app.get('/info', (req, res) => res.send('User Info'));
}