const EventComments = require('../models/eventComments')

exports.getEventComments = (req, res) => {
  const { eventId } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  if (!eventId || Number.isNaN(Number(eventId))) {
    res.status(400).send('Invalid eventID')
    return
  }

  EventComments.findAll({ where: { eventId: eventId } }).then((resp) => {
    res.status(200).json(resp)
  })
}