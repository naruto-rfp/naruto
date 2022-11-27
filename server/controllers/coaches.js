const Coaches = require('../models/coaches')
const Users = require('../models/users')

/**
 * GET /coaches/:teamID?page=1&pageSize=10
 */
exports.getCoaches = (req, res) => {
  const { teamID } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  if (!teamID || Number.isNaN(Number(teamID))) {
    res.status(400).send('Invalid teamID')
    return
  }

  // Retrieve the coaches user id from the database for the specified teamID and
  // only within the specified page and pageSize
  Coaches.findAll
    .where('teamID')
    .equals(teamID)
    .skip(page * pageSize)
    .limit(pageSize)
    .exec((err, coaches) => {
      if (err) {
        res.status(500).send('Error retrieving coaches from the database')
      } else {
        // Get the users information for each coach
        Users.findAll
          .where('id')
          .in(coaches.map((coach) => coach.userID))
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
