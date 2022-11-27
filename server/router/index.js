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
// Change the Stat and bio of the athletes
router.put('/user/:id/edit', controllers.changeProfile)
// Change Profile Picture of user
router.put('/user/:id/profilePic', controllers.changeProfilePic)

router.get('/session', controllers.getSession)
router.post('/login', controllers.login)
router.post('/logout', controllers.logout)

// Retrieve Product information
router.get('/products', store.getProducts)
// Add Product to Database
router.post('/products', store.postProducts)
// Delete Product from Database
router.delete('/products/:id', store.deleteProduct)
// Retrieve SKU information
router.get('/skus', store.getSkus)
router.get('/skus/id', store.getSkuById)
// Add SKU info to Database
router.post('/skus', store.postSkus)
// Delete SKUs from Database
router.delete('/skus/:id', store.deleteSkus)

module.exports = router
