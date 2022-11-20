const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Team', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    sport: {
      type: DataTypes.STRING,
    },
    about: {
      type: DataTypes.TEXT
    }
  });
}
