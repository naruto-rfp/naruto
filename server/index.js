const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
require('dotenv').config();

const app = express();
const router = require('./router');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`server is listening to http://localhost:${port}`);
});

module.exports = app;
