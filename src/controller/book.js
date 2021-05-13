const { get } = require('../connection');



const saveBook = async (book) => {
    try {
        const db = await get();
        const data = await db.insertOne(book);
        return data && data.insertedId;
    }
    catch (err) {
        throw  err;
    }
} 
const findAllBooks = async () => {
    try {
        const db = await get();
        const data = await db.find().toArray();
        return data;
    }
    catch (err) {
        throw  err;
    }
} 

module.exports = {
    saveBook,
    findAllBooks
}