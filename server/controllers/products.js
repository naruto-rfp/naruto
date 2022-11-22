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
  SKUs.findAll()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Internal Server Error' })
    })
}

exports.getSkuById = (req, res) => {
  const { id } = req.body
  SKUs.findAll({ where: { productId: id } })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Internal Server Error' })
    })
}

exports.postSkus = (req, res) => {
  const { id, price, quantity, ProductId } = req.body
  SKUs.create({
    id,
    price,
    quantity,
    ProductId,
  })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Internal Server Error' })
    })
}

exports.deleteProduct = (req, res) => {
  const value = req.params.id
  Products.destroy({ where: { id: value } })
    .then((count) =>
      res.status(200).send(`Removed ${count} rows. Deleted product id ${value} successfully`)
    )
    .catch((err) => res.status(500).send({ message: err.message || 'Internal Server Error' }))
}

exports.deleteSkus = (req, res) => {
  const value = req.params.id
  SKUs.destroy({ where: { id: value } })
    .then((count) =>
      res.status(200).send(`Removed ${count} rows. Deleted sku id ${value} successfully`)
    )
    .catch((err) => res.status(500).send({ message: err.message || 'Internal Server Error' }))
}
