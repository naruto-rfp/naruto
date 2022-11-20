const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Comment', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        event: DataTypes.INTEGER,
        text: DataTypes.STRING,
      })
}
