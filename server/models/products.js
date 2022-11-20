const { DataTypes } = require('sequelize')
const db = require('../database')

const Products = db.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  photos: {
    DataTypes: DataTypes.TEXT,
  },
  default_price: {
    DataTypes: DataTypes.INTEGER,
  },
})

module.exports = Products
