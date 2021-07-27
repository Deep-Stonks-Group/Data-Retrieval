const axios = require('axios');

const baseUrl = 'https://www.alphavantage.co/query';
const apiFunction = 'TIME_SERIES_INTRADAY';
const apiKey = 'WQATOAMO0JKPAHSY';

const fetchStockData = (req, res) => {
  console.log('BITCHBITCHBITCH')
  console.log(req)
  return axios.get(baseUrl, {
      params: {
        function: apiFunction,
        symbol: req.symbol,
        interval: req.interval,
        apikey: apiKey
      }
    })
    .then(response => {
      res.send(response.data)
    })
    .catch(err => {
      console.log('Error: ', err.message);
    });
};

exports.fetchStockData = fetchStockData;