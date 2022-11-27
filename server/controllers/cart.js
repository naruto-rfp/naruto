const db = require('../database')

const { Cart } = db

exports.getCart = (req, res) => {
  Cart.findAll()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Internal Server Error' })
    })
}

exports.postCart = (req, res) => {
  const { productId, name, description, photos, defaultPrice, skuId, size, quantity } = req.body

  Cart.create({
    productId,
    name,
    description,
    photos,
    defaultPrice,
    skuId,
    size,
    quantity,
  })
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Internal Server Error' })
    })
}

exports.deleteCart = (req, res) => {
  const value = req.params.id
  Cart.destroy({ where: { id: value } })
    .then((count) =>
      res.status(200).send(`Removed ${count} rows. Deleted product id ${value} successfully`)
    )
    .catch((err) => res.status(500).send({ message: err.message || 'Internal Server Error' }))
}
