const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: DataTypes.STRING,
  about: DataTypes.TEXT,
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
})

module.exports = Users
