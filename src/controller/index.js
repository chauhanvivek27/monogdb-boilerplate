const collection = require('../model/book-collection');

console.log('collection-controller', collection);

const findAllBook = collection.insertOne({
    name: 'C++ Language',
    author: 'Bob Martin'
}, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result.result);
})

module.exports = {
    findAllBook
}