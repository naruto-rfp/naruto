const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Users = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
  },
  { timestamps: false }
)

module.exports = Users
