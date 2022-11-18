const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const router = require('./router');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`server is listening to http://localhost:${port}`);
});

module.exports = app;
