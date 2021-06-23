const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('notes routes'));

module.exports = router;