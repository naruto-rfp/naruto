import './store.css'
import { useState } from 'react'
import { useStore } from '../../lib/fastContext'
import ProductModalContent from './Modal'

export default function Card({ id, name, description, photos, price, skus }) {
  const [productID, setProductId] = useState(null)
  const [skuID, setSkuID] = useState(null)
  const [modal, setModal] = useStore('modal')
  const [size, setSize] = useState('')
  const [stock, setStock] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [isActive, setActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  const changeStyle = () => {
    setActive(!isActive)
  }

  const filterSkus = (prodId) => {
    const result = skus?.filter((row) => row.ProductId === prodId)
    console.log(`this is skus for product id ${id}:`, result)
    return result
  }

  const getQuantity = (prodId, sizeSelected) => {
    const row = filterSkus(prodId)
    // console.log("now we're in getQuantity", row)
    const selectedQuantity = row.filter((sku) => sku.size === sizeSelected)
    // console.log('this is selected quantity', selectedQuantity[0].quantity)
    setSkuID(selectedQuantity[0].id)
    setStock(selectedQuantity[0].quantity)
    return selectedQuantity[0].quantity
  }

  const numDropdown = () => {
    // set the stock to the last number in the array
    const arrayToN = Array?.from({ length: stock }, (v, i) => i + 1)
    // console.log('this is what the array looks like', arrayToN)
    // return arrayToN
    return arrayToN?.map((num, index) => {
      return (
        <option className="qty-options" value={num} key={index}>
          {num}
        </option>
      )
    })
  }

  const handleSizeClick = (userSize, index, productId) => {
    setSize(userSize)
    // console.log('User clicked index ', userSize, index)
    // console.log('SizeID:', productId)
    setProductId(productId)
    getQuantity(productId, userSize)
    // for style changing
    setCurrentIndex(index)
  }

  const handleCartSubmit = () => {
    console.log('this is the productId ', productID)
    console.log('this is the skuId ', skuID)
    console.log('this is the size selected: ', size)
    console.log('this is the quantity selected ', quantity)
  }

  const handleModalClick = () => {
    const skuInfo = filterSkus(id)
    setModal({
      ...modal,
      content: (
        <ProductModalContent
          photos={photos}
          name={name}
          id={id}
          price={price}
          description={description}
          skuInfo={skuInfo}
          currentIndex={currentIndex}
          handleSizeClick={handleSizeClick}
          setQuantity={setQuantity}
          numDropdown={numDropdown}
          quantity={quantity}
          stock={stock}
          handleCartSubmit={handleCartSubmit}
        />
      ),
    })
  }

  return (
    <div
      className="product-card"
      onMouseEnter={changeStyle}
      onMouseLeave={changeStyle}
      onClick={handleModalClick}
      tabIndex={0}
      onKeyDown={handleModalClick}
      role="button"
    >
      <div className="wrapper">
        <div className="img">
          <img className="jersey-photo" src={photos} alt={name} />
        </div>
        <div className="card-info">
          <h1 className="product-name" style={{ fontWeight: isActive ? '550' : '' }}>
            {name}
          </h1>
          <p className="price">${price}.00</p>
        </div>
      </div>
    </div>
  )
}
