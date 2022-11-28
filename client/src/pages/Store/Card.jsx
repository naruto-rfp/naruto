import './store.css'
import { useState } from 'react'
import { useStore } from '../../lib/fastContext'
import ProductModalContent from './Modal'

export default function Card({ id, name, description, photos, price, skus, products }) {
  const [modal, setModal] = useStore('modal')
  const [isActive, setActive] = useState(false)

  // When user hovers over the sizes, change style
  const changeStyle = () => {
    setActive(!isActive)
  }

  // given a productID, filter through all skus (from get request and saved in state) and find the matching array of objects of skus
  const filterSkus = (prodId) => {
    const result = skus?.filter((row) => row.productId === prodId)
    console.log(`this is skus for product id ${id}:`, result)
    return result
  }

  const handleModalClick = () => {
    const skuInfo = filterSkus(id)
    console.log('this is skuInfo', skuInfo)
    setModal({
      ...modal,
      content: (
        <ProductModalContent
          id={id}
          photos={photos}
          name={name}
          price={price}
          description={description}
          skuInfo={skuInfo}
          filterSkus={filterSkus}
          products={products}
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
