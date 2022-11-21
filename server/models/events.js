const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Events = sequelize.define('Events', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
})

module.exports = Events
