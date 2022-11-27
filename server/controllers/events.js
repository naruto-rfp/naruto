const Events = require('../models/events')
const { Op } = require("sequelize")

exports.getPosts = (req, res) => {
  // const { teamID } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  // if (!teamID || Number.isNaN(Number(teamID))) {
  //   res.status(400).send('Invalid teamID')
  //   return
  // }
  const queryId = [];
  for (let key in req.query) {
    queryId.push(req.query[key])
  }

  Events.findAll({ where: { [Op.or]: queryId } }).then((resp) => {
    res.status(200).json(resp)
  })
}
