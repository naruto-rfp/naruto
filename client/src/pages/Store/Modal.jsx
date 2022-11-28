import './store.css'
import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import axios from 'axios'

// pass initial state to product modal content
// move state items to product modal content

export default function ProductModalContent({
  id,
  photos,
  name,
  price,
  description,
  skuInfo,
  filterSkus,
  products,
}) {
  // productID, skuID, size, and quantity for http post request to api/cart
  const [productID, setProductId] = useState(null)
  const [skuID, setSkuID] = useState(null)
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(0)
  // stock is for conditionally rendering the <select> and <option> tags
  const [stock, setStock] = useState(0)
  // currentIndex is for the style change when user clicks a new size
  const [currentIndex, setCurrentIndex] = useState(null)

  // helper function to change state items
  const getQuantity = (prodId, sizeSelected) => {
    // retrieve the skus that match the product ID
    const row = filterSkus(prodId)
    // retrieve the row of sku info based on the user size selected
    const selectedQuantity = row.filter((sku) => sku.size === sizeSelected)
    // state item for post request
    setSkuID(selectedQuantity[0].id)
    setStock(selectedQuantity[0].quantity)
  }

  const handleSizeClick = (userSize, index, productId) => {
    // state items for post request
    setSize(userSize)
    setProductId(productId)
    // helper function to change state items
    getQuantity(productId, userSize)
    // for style changing
    setCurrentIndex(index)
  }

  const numDropdown = () => {
    // set the stock to the last number in the array
    const arrayToN = Array?.from({ length: stock }, (v, i) => i + 1)
    // return <option> elements for the select drop down menu
    return arrayToN?.map((num, index) => {
      return (
        <option className="qty-options" value={num} key={index}>
          {num}
        </option>
      )
    })
  }

  // when user has valid cart and clicks submit
  const handleCartSubmit = () => {
    // iterate through the array of products and return the matching object based on productID
    const result = products.filter((product) => product.id === productID)
    const productInformation = result[0]
    // set the properties in the product object
    productInformation.skuId = skuID
    productInformation.size = size
    productInformation.quantity = Number(quantity)
    // rename the id property to productId
    productInformation.productId = productInformation.id
    delete productInformation.id
    // console.log('this is what I plan to send in the post request', productInformation)
    // post request to database
    axios
      .post('/api/cart', productInformation)
      .then((data) => console.log('Added to cart successfully:', data.data))
      .catch((err) => console.log(err))
  }

  return (
    <div className="modal-container">
      <div className="modal-image">
        <img src={photos} alt={name} />
      </div>
      <div className="modal-card-info">
        <div className="modal-product-info">
          <h1 className="modal-product-name">{name}</h1>
          <div className="modal-sku-info">SKU ID#: {id}</div>
        </div>
        <p className="modal-price">${price}.00</p>
        <p className="modal-description-title">Product Description</p>
        <p className="modal-description">{description}</p>
        <div className="modal-atc-container">
          <div className="modal-sizes-title">Apparel Sizes</div>
          <div className="modal-size-container">
            {skuInfo?.map((sizes, index) => {
              return (
                <div
                  className={
                    index === currentIndex ? 'active modal-size-boxes' : 'modal-size-boxes'
                  }
                  onClick={() => {
                    handleSizeClick(sizes.size, index, sizes.productId)
                  }}
                  key={sizes.id}
                  tabIndex={0}
                  onKeyDown={() => {
                    handleSizeClick(sizes.size, index, sizes.id)
                  }}
                  role="button"
                >
                  {sizes.size}
                </div>
              )
            })}
          </div>
          <div className="modal-atc-sub-container">
            <div className="selectdiv">
              <select value={quantity} onChange={(event) => setQuantity(event.target.value)}>
                {stock > 0 ? (
                  <>
                    <option className="inner-select-text" value="">
                      SELECT QTY
                    </option>
                    {numDropdown()}
                  </>
                ) : (
                  <option className="inner-select-text" value="">
                    SELECT QTY
                  </option>
                )}
              </select>
            </div>

            <button
              className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/3 bg-gradient-to-r from-blackCoral to-greenYellow"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={handleCartSubmit}
            >
              <Link to="/store">Add To Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
