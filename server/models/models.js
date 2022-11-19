const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db.js');

const Users = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: DataTypes.STRING,
  about: DataTypes.STRING,
  stats: DataTypes.INTEGER,
  profilePic: DataTypes.TEXT,
  speed: DataTypes.INTEGER,
  strength: DataTypes.INTEGER,
  reliability: DataTypes.INTEGER,
  jumping: DataTypes.INTEGER,
  aerobic: DataTypes.INTEGER
})

const Teams = sequelize.define('Team', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true
  },
  sport: {
    type: DataTypes.STRING,
  },
  about: {
    type: DataTypes.TEXT
  }
})

const Coaches = sequelize.define('Coaches', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  teamID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})


const Members = sequelize.define('Members', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  teamID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

const Fans = sequelize.define('Fans', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  teamID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

const Posts = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: DataTypes.INTEGER,
  team: DataTypes.INTEGER,
  title: DataTypes.STRING,
  text: DataTypes.STRING,
  cheers: DataTypes.INTEGER,
  date: DataTypes.DATE
})

const PostComments = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userID: DataTypes.INTEGER,
  commentText: DataTypes.TEXT,
  post: DataTypes.INTEGER
})

const Events = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
    autoIncrement: true
  },
  teamID: DataTypes.INTEGER,
  eventText: DataTypes.TEXT,
  eventDate: DataTypes.DATE,
  eventLocation: DataTypes.TEXT
})

const eventComments = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  event: DataTypes.INTEGER,
  text: DataTypes.STRING,
  date: DataTypes.DATE
})

const Products = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    photos: DataTypes.TEXT,
    default_price: DataTypes.INTEGER
})

const Skus = sequelize.define('Sku', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
    productID: DataTypes.INTEGER,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER
})
