const db = require('../database')

const { Products, SKUs } = db

exports.getProducts = (req, res) => {
  Products.findAll()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Internal Server Error' })
    })
}

exports.postProducts = (req, res) => {
  const { id, name, description, photos, defaultPrice } = req.body

  Products.create({
    id,
    name,
    description,
    photos,
    defaultPrice,
  })
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Internal Server Error' })
    })
}

exports.getSkus = (req, res) => {
  const { id } = req.body
  SKUs.findAll({ where: { productId: id } }).then((data) => {
    res.status(200).json(data)
  })
}

exports.postSkus = (req, res) => {
  const { id, price, quantity, productId } = req.body
  SKUs.create({
    id,
    price,
    quantity,
    productId,
  })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Internal Server Error' })
    })
}
