import './store.css'

export default function Card({ title, images, price, denomination, alt, date }) {
  const newClassName = `color_bg ${alt}`
  const bg_img = `url(${images})`

  return (
    // card
    <div className="card">
      {/* wrapper 11 min */}
      <div className="wrapper">
        {/* <div className="mt-60px mx-10px mb-10px pt-300px box-border relative shadow-2xl ease-out duration-300"> */}
        <div className={newClassName} />
        <div className="card_img" style={{ backgroundImage: bg_img }} />
        <div className="cardInfo">
          <h1>{title}</h1>
          <p className="date_">{date}</p>
          <div className="action">
            <div className="priceGroup">
              <p className="price">
                {denomination}
                {price}
              </p>
            </div>
            <button className="cart" type="submit">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
