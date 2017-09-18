const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:bucket/bucket');
app.use(bodyParser.json({ type: '*/*'}));
router(app);

const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port);
console.log('Server listening on ' + port);