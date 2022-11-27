const express = require('express')
const controllers = require('../controllers')
const coaches = require('../controllers/coaches')
const members = require('../controllers/members')
const fans = require('../controllers/fans')
const store = require('../controllers/products')
const cart = require('../controllers/cart')

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
// Change the Stat of the athletes
router.put('/user/:id/stats', controllers.changeStats)

router.get('/session', controllers.getSession)
router.post('/login', controllers.login)
router.post('/logout', controllers.logout)

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

/**
 * Members
 */
router.get('/members/:teamID', members.getMembers)

/**
 * Fans
 */
router.get('/fans/:teamID', fans.getFans)

module.exports = router
