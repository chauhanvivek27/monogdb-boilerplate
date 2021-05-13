const { get } = require('../connection');
const { success, error } = require('../helpers/app-reposne');


module.exports = function (app) {
    app.get('/isconnect', async function (req, res, next) {
        try {
            const collection = await get();
            if (collection) {
                res.send(success('Connected to DB successfully'));
            } else {
                res.send(error('DB connection failed'));
            }
        }
        catch (err) {
            error('post reterive failed', res);
            next(err);
        }
    });
}