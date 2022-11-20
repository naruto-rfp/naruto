const { DataTypes } = require('sequelize')
const db = require('../database')

const Events = db.define('Events', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  eventText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  eventDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  eventLocation: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
})

module.exports = Events
