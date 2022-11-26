import './store.css'
import { Link } from 'react-router-dom'

export default function ProductModalContent({
  photos,
  name,
  id,
  price,
  description,
  skuInfo,
  currentIndex,
  handleSizeClick,
  setQuantity,
  numDropdown,
  quantity,
  stock,
  handleCartSubmit,
}) {
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
                    handleSizeClick(sizes.size, index, sizes.ProductId)
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
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
