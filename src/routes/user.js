const express = require('express')
let router = express.Router();


router.get('/gist', function (req, res) {
    res.send('User Dashboard Page');
});


module.exports = router