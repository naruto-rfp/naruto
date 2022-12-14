const { Op } = require('sequelize')
const Teams = require('../models/teams')
const Posts = require('../models/posts')
const Events = require('../models/events')

exports.getTeamName = (req, res) => {
  const { teamID } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  if (!teamID || Number.isNaN(Number(teamID))) {
    res.status(400).send('Invalid teamID')
    return
  }

  Teams.findAll({ where: { id: teamID } }).then((resp) => {
    res.status(200).json(resp)
  })
}

exports.checkTeams = (req, res) => {
  Teams.findAll({ where: { name: req.params.name } }).then((resp) => {
    res.status(200).json(resp)
  })
}

exports.updateTeamBanner = (req, res) => {
  const { teamID } = req.params
  const { bannerUrl } = req.body

  // Verify the teramID is a valid teamID
  if (!teamID || Number.isNaN(Number(teamID))) {
    res.status(400).send('Invalid teamID')
    return
  }

  Teams.update({ teamBannerPic: bannerUrl }, { where: { id: teamID } })
    .then((resp) => {
      console.log('resp', resp)
      res.status(200).json(resp)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}

exports.getPosts = (req, res) => {
  const { teamID } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  if (!teamID || Number.isNaN(Number(teamID))) {
    res.status(400).send('Invalid teamID')
    return
  }

  Posts.findAll({
    where: { teamId: teamID },
    offset: (page - 1) * pageSize,
    limit: pageSize,
  }).then((resp) => {
    res.status(200).json(resp)
  })
}

exports.getEvents = (req, res) => {
  const { teamID } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  if (!teamID || Number.isNaN(Number(teamID))) {
    res.status(400).send('Invalid teamID')
    return
  }

  Events.findAll({
    where: { teamId: teamID },
    offset: (page - 1) * pageSize,
    limit: pageSize,
  }).then((resp) => {
    res.status(200).json(resp)
  })
}

exports.updateTeamAvatar = (req, res) => {
  const { teamID } = req.params
  const { avatarUrl } = req.body

  // Verify the teramID is a valid teamID
  if (!teamID || Number.isNaN(Number(teamID))) {
    res.status(400).send('Invalid teamID')
    return
  }

  Teams.update({ teamAvatarPic: avatarUrl }, { where: { id: teamID } })
    .then((resp) => {
      console.log('resp', resp)
      res.status(200).json(resp)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}

exports.getAllRelatedTeamName = (req, res) => {
  const queryId = []
  const idValues = []
  for (let key in req.query) {
    queryId.push(req.query[key])
  }
  for (let i = 0; i < queryId.length; i++) {
    idValues.push(queryId[i]['teamId'])
  }
  Teams.findAll({ where: { id: {[Op.or]: idValues } }}).then((resp) => res.status(200).json(resp))
}
