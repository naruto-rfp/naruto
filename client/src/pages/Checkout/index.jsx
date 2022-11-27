import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './checkout.css'

export default function Checkout() {
  const [cart, setCart] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    axios
      .get('/api/cart')
      .then((data) => console.log('Retrieved data from the cart', data.data))
      .catch((err) => console.log(err))
  }, [cart])

  return (
    // container
    <>
      <section className="max-w-6xl mx-auto mt-3 checkout-container">
        <div className="main-cart">
          {cart.length > 0 ? (
            <div className="cart-component">greater than 0</div>
          ) : (
            <>
              <h1>YOUR CART IS EMPTY</h1>
              <p>
                There are no items in your shopping cart,&nbsp;
                <Link className="hyperlink" to="/store">
                  continue shopping
                </Link>
                .
              </p>
            </>
          )}
        </div>
        <div className="sidebar bg-gradient-to-b from-blackCoral to-greenYellow">
          <h4>YOUR ORDER</h4>
          <div className="payment-container">
            <div className="subtotal-container">
              <div className="subtotal">ORDER SUBTOTAL</div>
              <div className="subtotal-value">${subtotal}.00</div>
            </div>
            <div className="shipping-container">
              <div className="shipping">SHIPPING</div>
              <div className="shipping-value">FREE</div>
            </div>
            <div className="tax-container">
              <div className="tax">TAX</div>
              <div className="tax-value">${tax}.00</div>
            </div>
            <div className="total-container">
              <div className="total">TOTAL</div>
              <div className="total-value">${total}.00</div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">space</section>
    </>
  )
}
