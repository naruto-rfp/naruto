const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db.js')

const Products = sequelize.define('Product', {
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

module.exports = Products

