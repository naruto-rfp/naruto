const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Teams = sequelize.define('Teams', {
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
  },
  {
    timestamps: false,
  }
)

module.exports = Teams
