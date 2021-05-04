const { findAllBook } = require('../controller/book');
const { success, error } = require('../helpers/app-reposne');

module.exports = function (app) {
    app.post('/book', async function (req, res, next) {
        try {
            console.log('req', req.body);
            //const post = await findAllBook();
            //res.send(success('reterive book successfully', post));
            res.send("body is found");
        }
        catch (err) {
            error('book reterive failed', res);
            next(err);
        }
    });
}