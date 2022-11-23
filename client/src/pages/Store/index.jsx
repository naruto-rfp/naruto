import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'

export default function Store() {
  const [products, setProducts] = useState([])
  const [skus, setSkus] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/products')
      .then((allProducts) => {
        setProducts(allProducts.data)
        console.log('this is all the products', allProducts.data)
      })
      .catch((err) => console.log(`Error in retrieving products: ${err}`))

    axios
      .get('http://localhost:3000/api/skus')
      .then((allSkus) => {
        setSkus(allSkus.data)
        console.log('this is all the skus', allSkus.data)
      })
      .catch((err) => console.log(`Error in retrieving skus: ${err}`))
  }, [])

  return (
    // container
    <section className="container">
      <div className="banner">
        <h4>Community Store</h4>
        <h1>Local Community Training Jerseys</h1>
        <p>
          Browse through our collection of mens&#39; and womens&#39; sports apparel and get ready
          for the next big game. Whether you&#39;re playing or watching your favorite sport,
          Community Sports has been delivering quality sports gear from your local teams since 2022.
          We&#39;ve partnered with the represented teams to provide you a safe and easy way to make
          purchases all from the comfort of your home.
        </p>
      </div>
      {/* row */}
      <div className="product-cards-container">
        {products.map((product) => {
          const { id, name, description, photos, defaultPrice } = product
          return (
            <Card
              id={id}
              name={name}
              description={description}
              photos={photos}
              price={defaultPrice}
              key={id}
              skus={skus}
            />
          )
        })}
      </div>
      <div className="footer" />
    </section>
  )
}
