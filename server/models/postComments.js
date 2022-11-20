const { DataTypes } = require('sequelize')
const db = require('../database')

const PostComments = db.define('postComments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userID: DataTypes.INTEGER,
  commentText: DataTypes.TEXT,
  postID: DataTypes.INTEGER,
  date: DataTypes.Date,
})

module.exports = PostComments
