const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database')

const Team = sequelize.define('Team', {
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
  coaches: {
    type: DataTypes.ARRAY(DataTypes.INTEGER)
  },
  members: {
    type: DataTypes.ARRAY(DataTypes.INTEGER)
  },
  fans: {
    type: DataTypes.ARRAY(DataTypes.INTEGER)
  },
  about: {
    type: DataTypes.TEXT
  }
})

Team.hasMany()

// Synchronize model and the database
Team.sync()
