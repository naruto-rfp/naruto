const db = require('./index')

// User Models
db.User = require('../models/users')
db.Coaches = require('../models/coaches')
db.Members = require('../models/members')
db.Fans = require('../models/fans')

// Team Models
db.Teams = require('../models/teams')

// Feed Models
db.Events = require('../models/events')
db.EventComments = require('../models/eventComments')
db.Posts = require('../models/posts')
db.PostComments = require('../models/postComments')

// Products & Skus Models
db.Products = require('../models/products')
db.SKUs = require('../models/skus')

// ASSOCIATIONS
// Products (primary key) and SKUs (foreign key) association
db.Products.hasMany(db.SKUs)
db.SKUs.belongsTo(db.Products, { onDelete: 'cascade' })

// Roles userID to teamID for coaches/users/fans https://sequelize.org/docs/v6/core-concepts/assocs/
db.User.belongsToMany(db.Teams, { through: db.Coaches, onDelete: 'cascade' })
db.Teams.belongsToMany(db.User, { through: db.Coaches, onDelete: 'cascade' })
db.User.belongsToMany(db.Teams, { through: db.Members, onDelete: 'cascade' })
db.Teams.belongsToMany(db.User, { through: db.Members, onDelete: 'cascade' })
db.User.belongsToMany(db.Teams, { through: db.Fans, onDelete: 'cascade' })
db.Teams.belongsToMany(db.User, { through: db.Fans, onDelete: 'cascade' })

// Posts (primary key) has many Post Comments (foreign key)
db.Posts.hasMany(db.PostComments)
db.PostComments.belongsTo(db.Posts)

// Users (primary key) has many Comments on Posts (foreign key)
db.User.hasMany(db.PostComments)
db.PostComments.belongsTo(db.User)

// EVENTS
// Teams (primary key) has many Events (foreign key)
db.Teams.hasMany(db.Events)
db.Events.belongsTo(db.Teams)

// Events (primary key) has many Event Comments (foreign key)
db.Events.hasMany(db.EventComments)
db.EventComments.belongsTo(db.Events)
