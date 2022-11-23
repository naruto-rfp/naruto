import './store.css'
import { useState } from 'react'
import { useStore } from '../../lib/fastContext'

export default function Card({ id, name, description, photos, price, skus }) {
  const [modal, setModal] = useStore('modal')
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [errorMsg, setErrorMsg] = useState(false)
  const [successMsg, setSuccessMsg] = useState(false)
  const [isActive, setActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeStyle = () => {
    setActive(!isActive)
  }

  const filterSkus = (prodId) => {
    const result = skus?.filter((row) => row.ProductId === prodId)
    console.log(`this is skus for product id ${id}:`, result)
    return result
  }

  const handleSizeClick = (userSize, index) => {
    setSize(userSize)
    console.log('User clicked index ', index)
    setCurrentIndex(index)
  }

  const handleModalClick = () => {
    const skuInfo = filterSkus(id)
    setModal({
      ...modal,
      content: (
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
                      className="modal-size-boxes"
                      onClick={() => {
                        handleSizeClick(sizes.size, index)
                      }}
                      key={sizes.id}
                      tabIndex={0}
                      onKeyDown={() => {
                        handleSizeClick(sizes.size, index)
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
                    <option className="inner-select-text" value="">
                      SELECT QTY
                    </option>
                  </select>
                </div>

                <button
                  className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/3 bg-gradient-to-r from-blackCoral to-greenYellow"
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
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

// className="inline-block pl-3 pr-5 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/3 mb-3 bg-gradient-to-r from-blackCoral to-greenYellow"
