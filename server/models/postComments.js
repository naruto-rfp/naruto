const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('postComments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userID: DataTypes.INTEGER,
    commentText: DataTypes.TEXT,
    postID: DataTypes.INTEGER,
    date: DataTypes.Date
  });
}
