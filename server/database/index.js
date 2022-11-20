const { Sequelize } = require('sequelize')
require('dotenv').config()

// connecting to a database via passing parameters separately
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// User Models
db.User = require('../models/users.js')(sequelize,Sequelize);
db.Coaches = require('../models/coaches.js')(sequelize,Sequelize);
db.Members = require('../models/members.js')(sequelize,Sequelize);
db.Fans = require('../models/fans.js')(sequelize,Sequelize);

// Team Models
db.Teams = require('../models/teams.js')(sequelize, Sequelize);

// Feed Models
db.Events = require('../models/events,js')(sequelize, Sequelize);
db.EventComments = require('../models/eventComments.js')(sequelize, Sequelize);
db.Posts = require('../models/posts.js')(sequelize, Sequelize);
db.PostComments = require('../models/postComments.js')(sequelize, Sequelize);

// Products & Skus Models
db.Products = require('../models/products.js')(sequelize, Sequelize);
db.SKUs = require('../models/skus.js')(sequelize, Sequelize);

// ASSOCIATIONS
// Products (primary key) and SKUs (foreign key) association
db.Products.hasMany(db.SKUs)
db.SKUs.belongsTo(db.Products, {onDelete: 'cascade'})

// Roles userID to teamID for coaches/users/fans https://sequelize.org/docs/v6/core-concepts/assocs/
db.User.belongsToMany(db.Teams, { through : db.Coaches, onDelete: 'cascade' })
db.Teams.belongsToMany(db.User, { through : db.Coaches, onDelete: 'cascade' })
db.User.belongsToMany(db.Teams, { through : db.Members, onDelete: 'cascade' })
db.Teams.belongsToMany(db.User, { through : db.Members, onDelete: 'cascade' })
db.User.belongsToMany(db.Teams, { through : db.Fans, onDelete: 'cascade' })
db.Teams.belongsToMany(db.User, { through : db.Fans, onDelete: 'cascade' })

// Posts (primary key) has many Post Comments (foreign key)
db.Posts.hasMany(db.PostComments)
db.PostComments.belongsTo(db.Posts)

// Users (primary key) has many Comments on Posts (foreign key)
db.Users.hasMany(db.PostComments)
db.PostComments.belongsTo(db.Users)

// EVENTS
// Teams (primary key) has many Events (foreign key)
db.Teams.hasMany(db.Events)
db.Events.belongsTo(db.Teams)

// Events (primary key) has many Event Comments (foreign key)
db.Events.hasMany(db.EventComments)
db.EventComments.belongsTo(db.Events)

module.exports = db;
