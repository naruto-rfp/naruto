const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Sample API route');
});

module.exports = router;
