const express = require('express');
const app = express();
const port = 8080;

const routeFactory = require('./src/routes');
app.listen(port, routeFactory(app));