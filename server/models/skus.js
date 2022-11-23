const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const SKUs = sequelize.define(
  'Skus',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = SKUs
