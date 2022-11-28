const express = require('express')
const controllers = require('../controllers')
const coaches = require('../controllers/coaches')
const members = require('../controllers/members')
const fans = require('../controllers/fans')
const store = require('../controllers/products')
const cart = require('../controllers/cart')
const posts = require('../controllers/posts')
const teams = require('../controllers/teams')
const events = require('../controllers/events')
const eventComments = require('../controllers/eventComments')

const router = express.Router()

router.get('/', (_, res) => {
  res.send('Sample API route')
})

/**
 * Users
 */
// Create User
router.post('/user', controllers.createUser)
// Get User Profile by ID
router.get('/user/:id', controllers.getUser)
// Change the Stat and bio of the athletes
router.put('/user/:id/edit', controllers.changeProfile)
// Change Profile Picture of user
router.put('/user/:id/profilePic', controllers.changeProfilePic)
// Retreive teams that Users are fan of
router.get('/user/:id/members', controllers.getUserMembers)

router.get('/session', controllers.getSession)
router.post('/login', controllers.login)
router.post('/logout', controllers.logout)

router.get('/user/checkuser/:username', controllers.checkUsers)

/**
 * Products
 */
// Retrieve Product information
router.get('/products', store.getProducts)
// Add Product to Database
router.post('/products', store.postProducts)
// Delete Product from Database
router.delete('/products/:id', store.deleteProduct)

/**
 * SKUs
 */
// Retrieve SKU information
router.get('/skus', store.getSkus)
router.get('/skus/id', store.getSkuById)
// Add SKU info to Database
router.post('/skus', store.postSkus)
// Delete SKUs from Database
router.delete('/skus/:id', store.deleteSkus)

/**
 * Cart
 */
// Retrieve Cart information
router.get('/cart', cart.getCart)
// Add Cart information
router.post('/cart', cart.postCart)
// Delete Cart information
router.delete('/cart/:id', cart.deleteCart)

/**
 * Coaches
 */
router.get('/coaches/:teamID', coaches.getCoaches)
router.get('/coaches/teams/:userId', coaches.getCoachTeams)

/**
 * Members
 */
router.get('/members/:teamID', members.getMembers)
router.get('/members/teams/:userId', members.getMemberTeams)

/**
 * Fans
 */
router.get('/fans/:teamID', fans.getFans)
router.get('/fans/teams/:userId', fans.getFanTeams)

/**
 * Posts
 */
router.get('/posts/:userID', posts.getPosts)

/**
 * Teams
 */
router.get('/teams/allrelated', teams.getAllRelatedTeamName)
router.get('/teams/:teamID', teams.getTeamName)
router.get('/teams/checkteams/:name', teams.checkTeams)
router.post('/teams/:teamID/changeBannerPic', teams.updateTeamBanner)
router.post('/teams/:teamID/changeAvatarPic', teams.updateTeamAvatar)
router.get('/teams/:teamID/posts', teams.getPosts)
router.get('/teams/:teamID/events', teams.getEvents)

/**
 * Events
 */
router.get('/events', events.getPosts)

/**
 * Event Comments
 */
router.get('/eventcomments/:eventId', eventComments.getEventComments)

module.exports = router
