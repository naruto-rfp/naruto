const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const User = require('./users')
const Team = require('./teams')

const Coaches = sequelize.define('Coaches', {
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

module.exports = Coaches
