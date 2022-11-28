const Teams = require('../models/teams')
const { Op } = require("sequelize")

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
