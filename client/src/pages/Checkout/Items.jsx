import axios from 'axios'
import './items.css'

export default function Items({ cart, setCart }) {
  const removeItem = (id) => {
    // filter the cart, remove the item the user wants to remove
    const filteredCart = cart.filter((cartItem) => cartItem.id !== id)
    setCart(filteredCart)

    axios
      .delete(`api/cart/${id}`)
      .then((deletedProduct) => console.log('Successfully deleted deletedProduct', deletedProduct))
      .catch((err) => console.log(err))
  }

  return (
    <div className="item-container">
      {cart.map((item) => {
        return (
          <div className="item-card-container" key={item.name}>
            <div className="item-card">
              <img className="item-photo" src={item.photos} alt={item.name} />
              <div className="item-inner-container">
                <div className="item-first-row">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">${item.defaultPrice}.00</div>
                  <div className="item-totalprice">${item.defaultPrice * item.quantity}.00</div>
                </div>
                <div className="item-second-row">
                  <div className="sku-info">Product ID # {item.skuId}</div>
                  <div className="sku-size">
                    <span className="font-medium">Size:</span> {item.size}
                  </div>
                  <div className="sku-quantity">
                    <span className="font-medium">Quantity:</span> {item.quantity}
                  </div>
                </div>
              </div>
              <button type="submit" className="remove-item-btn" onClick={() => removeItem(item.id)}>
                REMOVE ITEM
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
