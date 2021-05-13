const bookCtrl = require('../controller/book');
const { success, error } = require('../helpers/app-reposne');

module.exports = function (app) {
    app.post('/book', async function (req, res, next) {
        try {
            const post = await bookCtrl.saveBook(req.body);
            res.send(success('book save successfully', post));
        }
        catch (err) {
            error('book reterive failed', res);
            next(err);
        }
    });

    app.get('/book', async function (req, res, next) {
        try {
            const post = await bookCtrl.findAllBooks();
            res.send(success('book reterive successfully', post));
        }
        catch (err) {
            error('book reterive failed', res);
            next(err);
        }
    });

}