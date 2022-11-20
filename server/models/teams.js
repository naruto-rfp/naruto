const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Teams = sequelize.define('Teams', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  sport: {
    type: DataTypes.STRING,
  },
  about: {
    type: DataTypes.TEXT,
  },
})

module.exports = Teams
