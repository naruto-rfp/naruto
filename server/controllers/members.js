const Members = require('../models/members')
const Users = require('../models/users')

/**
 * GET /members/:teamID?page=1&pageSize=10
 */
exports.getMembers = (req, res) => {
  const { teamID } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  if (!teamID || Number.isNaN(Number(teamID))) {
    res.status(400).send('Invalid teamID')
    return
  }

  // Retrieve the members user id from the database for the specified teamID and
  // only within the specified page and pageSize
  Members.findAll
    .where('teamID')
    .equals(teamID)
    .skip(page * pageSize)
    .limit(pageSize)
    .exec((err, members) => {
      if (err) {
        res.status(500).send('Error retrieving coaches from the database')
      } else {
        // Get the users information for each coach
        Users.findAll
          .where('id')
          .in(members.map((member) => member.userID))
          .exec((err2, users) => {
            if (err2) {
              res.status(500).send('Error retrieving users from the database')
            } else {
              res.status(200).json(users)
            }
          })
      }
    })
}

exports.getMemberTeams = (req, res) => {
  const { userId } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  if (!userId || Number.isNaN(Number(userId))) {
    res.status(400).send('Invalid userID')
    return
  }

  Members.findAll({ attributes: ['teamId'], where: { userId: userId } }).then((resp) => {
    res.status(200).json(resp)
  })
}
