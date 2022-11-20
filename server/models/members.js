const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('../models/users.js');
const Team = require('../models/teams.js');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Members', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    teamID: {
      type: DataTypes.INTEGER,
      references: {
        model: Team,
        key: 'id'
      }
    }
  });
}
