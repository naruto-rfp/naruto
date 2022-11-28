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
  // const queryId = [];
  // for (let key in req.query) {
  //   queryId.push(req.query[key])
  // }
  // console.log(queryId)
  // Teams.findAll({ where: { [Op.or]: {id: queryId.teamId } } }).then((resp) => res.status(200).json(resp))
}

exports.checkTeams = (req, res) => {
  console.log('here',req.params)
  Teams.findAll({ where: { name: req.params.name } }).then((resp) => {
    res.status(200).json(resp)
  })
}
