const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Posts = sequelize.define('Posts', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.INTEGER,
  team: DataTypes.INTEGER,
  title: DataTypes.STRING,
  text: DataTypes.STRING,
  cheers: DataTypes.INTEGER,
  date: DataTypes.DATE,
})

module.exports = Posts
