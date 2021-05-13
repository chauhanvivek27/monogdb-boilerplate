const app = require('./app');
const logger  = require('./helpers/logger');
const config = require('./config');
const { connect } = require('./connection');

 
app.listen(config.APP.PORT, async () => {
     app.locals.db = await connect();
     logger.info(`Starting Server on  port ${config.APP.PORT}`);
});

process.on('uncaughtException', (error) => {
    logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
    process.exit(1);
  });
  
  process.on('SIGINT', () => {
    logger.info(' Alright! Bye bye!');
    process.exit();
  });