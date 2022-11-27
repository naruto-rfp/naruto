const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Products = sequelize.define(
  'products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    photos: {
      type: DataTypes.TEXT,
    },
    defaultPrice: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Products
