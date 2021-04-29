const app = require('./app');
const http = require('http');
const morgan = require('morgan');
const config = require('./config');
const logger  = require('./helpers/logger');
const handleErrors = require('./middleware/handleerror');
const { connect } = require('./connection');

 
app.use(morgan('combined'));

app.use(handleErrors);

app.listen(config.APP.PORT, async () => {
     await connect();
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