const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

// \COPY "Products" (id, name, description, photos, "defaultPrice") FROM 'absolute filepath/products.csv' DELIMITER ',' CSV HEADER;

const Products = sequelize.define(
  'Products',
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
