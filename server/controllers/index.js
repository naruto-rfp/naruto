const db = require('../database');

const User = db.User;

exports.createUser = (req, res) => {
  const { username, firstname, lastname, password, email } = req.body;

  User.create({
    username,
    firstname,
    lastname,
    password,
    email
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Internal Server Error'
    });
  });
};

exports.getUser = (req, res) => {
  const { id } = req.params;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: `Error retrieving User with id=${id}`
      });
    });
};

exports.changeStats = (req, res) => {
  const { speed, reliability, strength, jumping, aerobic } = req.body;
  const { id } = req.params;

  User.update({
    speed,
    reliability,
    strength,
    jumping,
    aerobic,
  }, { where: { id: id }}).then(data => {
    res.status(200).send('User Stat Updated');
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Internal Server Error'
    });
  });
};