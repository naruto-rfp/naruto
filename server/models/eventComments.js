const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const EventComments = sequelize.define(
  'event_comments',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    text: DataTypes.STRING,
  },
  { timestamps: false }
)

module.exports = EventComments
