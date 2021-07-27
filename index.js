const express = require('express');
const app = express();
const preResponseHook = require('./src/util/preResponseHook');
const alphaVantage = require('./src/util/alphaVantage');
const port = 8081;

app.use(preResponseHook);
// app.use(express.json());
app.use('/notes', require('./src/routes/notes'));
app.use('/test', require('./src/routes/test'));
// app.use('/fetch', require('./src/routes/fetch'));

console.log(alphaVantage.fetchStockData({symbol: 'AAPL', interval: '5min'}))

app.get('/fetch', (req, res) => alphaVantage.fetchStockData(req.query, res))

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));