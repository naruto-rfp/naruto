const { DataTypes } = require('sequelize')
const db = require('../database')
const User = require('./users')
const Team = require('./teams')

const Members = db.define('Members', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userID: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  teamID: {
    type: DataTypes.INTEGER,
    references: {
      model: Team,
      key: 'id',
    },
  },
})

module.exports = Members
