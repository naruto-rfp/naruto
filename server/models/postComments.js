const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const PostComments = sequelize.define('postComments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userID: DataTypes.INTEGER,
  commentText: DataTypes.TEXT,
  postID: DataTypes.INTEGER,
  date: DataTypes.DATE,
})

module.exports = PostComments
