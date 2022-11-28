const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Teams = sequelize.define(
  'teams',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    sport: {
      type: DataTypes.STRING,
    },
    about: {
      type: DataTypes.TEXT,
    },
    teamAvatarPic: {
      type: DataTypes.STRING,
    },
    teamBannerPic: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
)

module.exports = Teams
