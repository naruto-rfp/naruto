const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../database/db.js')
const Products = require('./products.js')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Sku', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
