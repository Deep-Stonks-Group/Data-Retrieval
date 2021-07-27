const express = require('express');
const router = express.Router();
const alphaVantage = require('../util/alphaVantage.js');

router.post('/', (req, res) => res.send(alphaVantage.fetchStockData(req, res)));

module.exports = router;