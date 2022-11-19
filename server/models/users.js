const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: DataTypes.STRING,
    about: DataTypes.STRING,
    profilePic: DataTypes.TEXT,
    speed: {
      type: DataTypes.INTEGER,
    },
    reliability: {
      type: DataTypes.INTEGER,
    },
    strength: {
      type: DataTypes.INTEGER,
    },
    jumping: {
      type: DataTypes.INTEGER,
    },
    aerobic: {
      type: DataTypes.INTEGER,
    },
  });
}
