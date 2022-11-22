const express = require('express')
const controllers = require('../controllers')
const store = require('../controllers/products')

const router = express.Router()

router.get('/', (_, res) => {
  res.send('Sample API route')
})

// Create User
router.post('/user', controllers.createUser)
// Get User Profile by ID
router.get('/user/:id', controllers.getUser)
// Change the Stat of the athletes
router.put('/user/:id/stats', controllers.changeStats)

router.get('/session', controllers.getSession)
router.post('/logout', controllers.logout)

// Retrieve Product information
router.get('/products', store.getProducts)
// Add Product to Database
router.post('/products', store.postProducts)
// Retrieve SKU information
router.get('/skus', store.getSkus)
// Add SKU info to Database
router.post('/skus', store.postSkus)

module.exports = router
