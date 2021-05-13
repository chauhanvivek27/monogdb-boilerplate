const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const logger = require('../helpers/logger');
const addressDb = config.DB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let mongodb = null;
exports.connect = async () => {
  logger.info('connecting to mongo DB');
  try {
    let client = await MongoClient.connect(addressDb, options);
    // get the collection
    const configCollection = config.COLLECTION;
    const listCollection = await client.db('Users').listCollections().toArray();
    const isCollectionExists = listCollection.find(collection => collection.name === configCollection);

    if (isCollectionExists) {
      mongodb = client.db('Users').collection(configCollection);
    }
    return mongodb;
  } catch (error) {
    logger.error(`error during connecting to mongo:  ${error.message}`);
  }
};

exports.get = () => {
  if (!mongodb) {
    throw new Error('Connect database first');
  }
  return mongodb;
};

exports.close = () => {
  mongodb.close();
};