const { Sequelize } = require('sequelize')
require('dotenv').config()

// connecting to a database via passing parameters separately
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
})

module.exports = sequelize
