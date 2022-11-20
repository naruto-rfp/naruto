const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db.js')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        photos: {
            DataTypes: DataTypes.TEXT
        },
        default_price: {
            DataTypes: DataTypes.INTEGER
        }
    })
}
