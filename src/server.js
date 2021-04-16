const app = require('./app');
const http = require('http');
 
const port = process.env.PORT || 8080;
 
const server = http.createServer(app);
 
app.listen(8080, function () {
    console.log('Listening to Port 8000');
});