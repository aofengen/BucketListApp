const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({ type: '*/*'}));

const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port);
console.log('Server listening on ' + port);