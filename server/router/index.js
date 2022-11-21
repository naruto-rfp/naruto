const express = require('express')
const controllers = require('../controllers')

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

module.exports = router
