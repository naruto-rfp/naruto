const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const EventComments = sequelize.define('eventComments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  event: DataTypes.INTEGER,
  text: DataTypes.STRING,
})

module.exports = EventComments
