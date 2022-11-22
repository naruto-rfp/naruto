const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Products = sequelize.define('Products', {
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
    type: DataTypes.TEXT,
  },
  defaultPrice: {
    type: DataTypes.INTEGER,
  },
})

module.exports = Products
