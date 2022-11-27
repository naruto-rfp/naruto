const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const User = require('./users')
const Team = require('./teams')

const Coaches = sequelize.define(
  'coaches',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    teamId: {
      type: DataTypes.INTEGER,
      references: {
        model: Team,
        key: 'id',
      },
    },
  },
  { timestamps: false }
)

module.exports = Coaches
