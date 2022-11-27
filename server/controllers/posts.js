const Posts = require('../models/posts')

exports.getPosts = (req, res) => {
  // const { teamID } = req.params
  // const { page = 1, pageSize = 10 } = req.query

  // // Verify the teramID is a valid teamID
  // if (!teamID || Number.isNaN(Number(teamID))) {
  //   res.status(400).send('Invalid teamID')
  //   return
  // }

  // // Retrieve the posts from the database for the specified teamID and
  // // only within the specified page and pageSize
  // Posts.findAll
  //   .where('teamID')
  //   .equals(teamID)
  //   .skip(page * pageSize)
  //   .limit(pageSize)
  //   .exec((err, posts) => {
  //     if (err) {
  //       res.status(500).send('Error retrieving posts from the database')
  //     } else {
  //       res.status(200).json(posts)
  //     }
  //   })

  const { userID } = req.params
  const { page = 1, pageSize = 10 } = req.query

  // Verify the teramID is a valid teamID
  if (!userID || Number.isNaN(Number(userID))) {
    res.status(400).send('Invalid userID')
    return
  }

  Posts.findAll({ where: { userId: userID } }).then((resp) => {
    res.status(200).json(resp)
  })
}
