const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database')


module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
      autoIncrement: true
    },
    eventText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    eventDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    eventLocation: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })
}
