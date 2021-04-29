const user = require('../api/user');
const { success, error } = require('../helpers/app-reposne');
module.exports = function (app) {
    app.get('/user', async function (req, res, next) {
        try {
            const post = await user();
            res.send(success('reterive post successfully', post));
        }
        catch (err) {
            error('post reterive failed', res);
            next(err);
        }
    });

    app.get('/info', (req, res) => res.send('User Info'));
}