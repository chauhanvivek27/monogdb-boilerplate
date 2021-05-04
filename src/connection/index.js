const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const logger = require('../helpers/logger');

console.log('config.DB_URI', config.DB_URI);
const addressDb = config.DB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


let mongodb;
exports.connect = async () => {
  // add async
  logger.info('connecting to mongo DB');
  try {
    let client = await MongoClient.connect(addressDb, options);
    // get the collection
    mongodb = client.db('Users').collection('personal');
  } catch (error) {
    logger.error('error during connecting to mongo: ');
    logger.error(error);
  }
};

exports.get = () => {
  return mongodb;
};

exports.close = () => {
  mongodb.close();
};