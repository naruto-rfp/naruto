const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const PostComments = sequelize.define('postComments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userID: DataTypes.INTEGER,
  postID: DataTypes.INTEGER,
  commentText: DataTypes.TEXT,
})

module.exports = PostComments
