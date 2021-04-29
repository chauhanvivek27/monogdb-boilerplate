const { get } = require('../connection');
const { success, error } = require('../helpers/app-reposne');


module.exports = function (app) {
    app.get('/isconnect', async function (req, res, next) {
        try {
            const collection = await get();
            //console.log('isconnect', JSON.stringify(collection));
            res.send(success('Connected to DB successfully'));
        }
        catch (err) {
            error('post reterive failed', res);
            next(err);
        }
    });
}