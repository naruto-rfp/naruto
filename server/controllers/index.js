const db = require('../database')
const Members = require('../models/members')
const Teams = require('../models/teams')

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

exports.changeProfile = (req, res) => {
  const { speed, reliability, strength, jumping, aerobic, about } = req.body
  const { id } = req.params

  User.update(
    {
      speed,
      reliability,
      strength,
      jumping,
      aerobic,
      about,
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

exports.changeProfilePic = (req, res) => {
  const { profilePic } = req.body
  const { id } = req.params

  User.update({ profilePic }, { where: { id } })
    .then(() => {
      res.status(200).send('User Profile Picture changed')
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Internal Server Error',
      })
    })
}

exports.getUserMembers = (req, res) => {
  const { id } = req.params

  Members.findAll({
    where: { userId: id },
  })
    .then((results) => {
      const teamIdMap = results.map((data) => {
        return data.dataValues.teamId
      })
      Teams.findAll({
        where: { id: teamIdMap },
      })
        .then((teamResults) => {
          res.status(200).json(teamResults)
        })
        .catch((err1) => {
          res.status(500).send(`Error Retrieving from Teams database, ${err1}`)
        })
    })
    .catch((err2) => {
      res.status(500).send(`Error retrieving from Members database, ${err2}`)
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
