const db = require('../database')

const { User } = db

exports.createUser = (req, res) => {
  console.log(req.body)
  const { username, firstName, lastName, password, email } = req.body
  const caseUsername = username.toLowerCase()
  const caseEmail = email.toLowerCase()

  User.create({
    username: caseUsername,
    firstName,
    lastName,
    password,
    email: caseEmail,
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Internal Server Error',
      })
    })
}

exports.getUser = (req, res) => {
  const { id } = req.params

  User.findByPk(id)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.error(err)

      res.status(500).send({
        message: `Error retrieving User with id=${id}`,
      })
    })
}

exports.changeStats = (req, res) => {
  const { speed, reliability, strength, jumping, aerobic } = req.body
  const { id } = req.params

  User.update(
    {
      speed,
      reliability,
      strength,
      jumping,
      aerobic,
    },
    { where: { id } }
  )
    .then(() => {
      res.status(200).send('User Stat Updated')
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Internal Server Error',
      })
    })
}

exports.login = async (req, res) => {
  const { username, password } = req.body

  User.findOne({
    where: {
      username,
      password,
    },
  })
    .then((data) => {
      req.session.user = {
        id: data.id,
        username: data.username,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        about: data.about,
        profilePic: data.profilePic,
        speed: data.speed,
        reliability: data.reliability,
        strength: data.strength,
        jumping: data.jumping,
        aerobic: data.aerobic,
      }
      res.status(200).send(req.session.user)
    })
    .catch((err) => {
      res.status(400).send(`incorrect username or password ${err}`)
    })
}

exports.getSession = (req, res) => {
  // Actual implementation will be done later
  // res.json(req.session.user || null)
  req.session.user = {
    id: 1,
    username: 'test',
  }
  res.json(req.session.user)
}

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) console.error(err)
  })
  res.status(200).send('Session Destroyed')
}
