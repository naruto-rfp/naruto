const { DataTypes } = require('sequelize')
const db = require('../database')

const EventComments = db.define('eventComments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  event: DataTypes.INTEGER,
  text: DataTypes.STRING,
})

module.exports = EventComments
