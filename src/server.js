const app = require('./app');
const http = require('http');
const config = require('./config');

const port = process.env.PORT;
 
const server = http.createServer(app);
 
app.listen(port, function () {
    console.log(`Server start runing on ${port}`);
});