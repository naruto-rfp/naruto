import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Items from './Items'
import './checkout.css'

export default function Checkout() {
  const [cart, setCart] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [tax, setTax] = useState(0)

  useEffect(() => {
    axios
      .get('/api/cart')
      .then((cartInfo) => {
        setCart(cartInfo.data)
        console.log('Retrieved data from the cart', cartInfo.data)
        // set sidebar content
        // calculate the subtotal for the sidebar
        const sub = cartInfo.data?.reduce((acc, obj) => {
          return acc + obj.defaultPrice * obj.quantity
        }, 0)
        console.log('this is subtotal:', sub)
        setSubtotal(sub)
        setTax(sub * 0.1)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    // container
    <>
      <section className="max-w-6xl mx-auto mt-3 checkout-container">
        <div className="main-cart">
          {cart.length > 0 ? (
            <>
              <div className="cart-banner">
                <h1 className="good-cart-h1">YOUR CART</h1>
                <button
                  type="submit"
                  className="checkout-btn bg-gradient-to-b text-white from-blackCoral to-greenYellow"
                >
                  <a
                    href="https://github.com/naruto-rfp/naruto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GUEST CHECKOUT
                  </a>
                </button>
              </div>
              <div className="cart-header">
                <div className="item-column">ITEM</div>
                <div className="unitprice-column">UNIT PRICE</div>
                <div className="total-price-column">TOTAL PRICE</div>
              </div>
              <Items cart={cart} setCart={setCart} />
            </>
          ) : (
            <div>
              <h1 className="empty-cart-h1">YOUR CART IS EMPTY</h1>
              <p>
                There are no items in your shopping cart,&nbsp;
                <Link className="hyperlink" to="/store">
                  continue shopping
                </Link>
                .
              </p>
            </div>
          )}
        </div>
        <div className="sidebar bg-gradient-to-b from-blackCoral to-greenYellow">
          <h4>YOUR ORDER</h4>
          <div className="payment-container">
            <div className="subtotal-container">
              <div className="subtotal">SUBTOTAL</div>
              <div className="subtotal-value">${subtotal}</div>
            </div>
            <div className="shipping-container">
              <div className="shipping">SHIPPING</div>
              <div className="shipping-value">FREE</div>
            </div>
            <div className="tax-container">
              <div className="tax">TAX</div>
              <div className="tax-value">${tax}</div>
            </div>
            <div className="total-container">
              <div className="total">TOTAL</div>
              <div className="total-value">${subtotal + tax}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">space</section>
    </>
  )
}
