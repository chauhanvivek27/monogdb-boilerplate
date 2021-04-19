const fetch = require('../util/fetch');
const config = require('../config');

const opts = {
    method: 'GET'
};
const postURL = process.env.POST_URL;
module.exports = async () => {
    const data = await fetch(postURL, opts);
    return data;
} 