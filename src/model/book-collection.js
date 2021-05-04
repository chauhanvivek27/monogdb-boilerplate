const { get } = require('../connection');
const bookSchema = require('../model/book-schema');

const db = get();

const bookCollection = db.createCollection("book", {
    validator: {
        $jsonSchema:bookSchema
    }
});
 console.log('collection', bookCollection);
 module.exports = bookCollection;