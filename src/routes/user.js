const user = require('../api/user');
const { success , error } = require('../helpers/app-reposne');
module.exports = function(app){
    app.get('/user', async function (req, res) {
        const post = await user();
        res.send(post);
    });

    app.get('/info', (req, res) => res.send('User Info'));
}