const fetch = require('node-fetch');
const logger  = require('../helpers/logger');

const LOG_SERVICE_REQUEST = process.env.LOG_SERVICE_REQUEST === 'true'
const LOG_SERVICE_RESPONSE_BODY = process.env.LOG_SERVICE_RESPONSE_BODY === 'true'

//const json = await fetch(url, {body, method, headers}).then(res=> res.json())

module.exports = async (url, opts) => {
  const responseStart = Date.now()
  logger.info(`Request URL ${url}`, LOG_SERVICE_REQUEST && opts || '')

  const response = await fetch(url, opts)
  .then(res => {
    const responseTime = Date.now() - responseStart
    logger.info(`Response from URL ${url} received in ${responseTime} ms`, LOG_SERVICE_RESPONSE_BODY && response || '');
    //res.setHeader('Content-Type', 'application/json')
    return res.json();
  }).catch(err => {
    throw err
  });

  return response;
}