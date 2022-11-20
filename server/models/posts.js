const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username: DataTypes.INTEGER,
        team: DataTypes.INTEGER,
        title: DataTypes.STRING,
        text: DataTypes.STRING,
        cheers: DataTypes.INTEGER,
        date: DataTypes.DATE
      })
}