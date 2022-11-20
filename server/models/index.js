const { development, production, test } = require('../../database/config/config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(development.database, development.username, development.password, {
  host: development.host,
  diatlect: 'postgres',
  operatorAliases: false,

  pool: {
    max: development.pool.max,
    min: development.pool.min,
    acquire: development.pool.acquire,
    idle: development.pool.idle
  }
})l

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

