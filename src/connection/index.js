const MongoClient = require('mongodb').MongoClient;
const config = require('../config');

console.log('config.DB_URI', config.DB_URI);
const addressDb = config.DB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


let mongodb;
exports.connect = async () => {
  // add async
  console.log('connecting to mongo DB');
  try {
    let client = await MongoClient.connect(addressDb, options);
    // get the collection
    mongodb = client.db('Users').collection('personal');
  } catch (error) {
    console.log('error during connecting to mongo: ');
    console.error(error);
  }
};

exports.get = () => {
  return mongodb;
};

exports.close = () => {
  mongodb.close();
};