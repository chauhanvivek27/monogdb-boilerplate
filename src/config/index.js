const dotenv = require('dotenv');
const path = require('path');


dotenv.config({
  path: path.resolve('./', process.env.NODE_ENV + '.env')
});
console.log('process.env.NODE_ENV', process.env.NODE_ENV, process.env.POST_URL);
const loadEnvVariable = (envName) => {
    const env = process.env[envName];
    if (env == null) {
      throw new Error(`Environment variable => ${envName} is undefined.`);
    }
    return env;
  };
  
  const config = {
    APP: {
      PORT: loadEnvVariable('PORT') || 8080,
    },
    DB: {
      URL: loadEnvVariable('NODE_ENV'),
    },
    POST_URL: loadEnvVariable('POST_URL'),
  };
  
  module.exports = config;