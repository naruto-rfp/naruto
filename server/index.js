const express = require('express')
const path = require('path')
const cors = require('cors')
const compression = require('compression')
const session = require('express-session')
require('dotenv').config()

const app = express()
const db = require('./database')
require('./database/config')
const router = require('./router')

db.sequelize.sync()
// db.sequelize.sync({ force: true, alter: true })

const port = process.env.PORT || 3000

app.use(cors())
app.use(compression())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../client/dist')))

// TODO: add session env variable
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      // Session cookie expires in 7 days
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    },
  })
)

app.use('/api', router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`server is listening to http://localhost:${port}`)
})

module.exports = app
