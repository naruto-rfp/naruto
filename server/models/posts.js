const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const User = require('./users')
const Team = require('./teams')

const Posts = sequelize.define(
  'posts',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    cheers: DataTypes.INTEGER,
  },
  { timestamps: false }
)

module.exports = Posts
