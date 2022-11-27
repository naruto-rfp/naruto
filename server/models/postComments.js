const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const PostComments = sequelize.define('post_comments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: DataTypes.INTEGER,
  postId: DataTypes.INTEGER,
  text: DataTypes.TEXT,
})

module.exports = PostComments
