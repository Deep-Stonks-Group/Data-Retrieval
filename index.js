const express = require('express');
const app = express();
const preResponseHook = require('./src/util/preResponseHook');
const port = 8080;

app.use(preResponseHook);
app.use('/notes', require('./src/routes/notes'));
app.use('/test', require('./src/routes/test'));
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));