const Events = require('../models/events')

exports.getPosts = (req, res) => {
  const { teamID } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  if (!teamID || Number.isNaN(Number(teamID))) {
    res.status(400).send('Invalid teamID')
    return
  }

  // Retrieve the events from the database for the specified teamID and
  // only within the specified page and pageSize
  Events.findAll
    .where('teamID')
    .equals(teamID)
    .skip(page * pageSize)
    .limit(pageSize)
    .exec((err, events) => {
      if (err) {
        res.status(500).send('Error retrieving events from the database')
      } else {
        res.status(200).json(events)
      }
    })
}
