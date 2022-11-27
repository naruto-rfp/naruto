const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Cart = sequelize.define(
  'Cart',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
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
    skuId: {
      type: DataTypes.INTEGER,
    },
    size: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Cart
