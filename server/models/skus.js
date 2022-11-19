const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../database/db.js')
const Products = require('./products.js')

const SKUs = sequelize.define('Sku', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    size: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER
    }
})

// adding foreign key associations
// skus' productID has a foreign key relationship to products table, id field, which is the primary key
Products.hasMany(SKUs)
SKUs.belongsTo(Products)

module.exports = SKUs
