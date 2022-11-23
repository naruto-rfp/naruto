import './store.css'

export default function Card({ id, name, description, photos, price }) {
  return (
    // card
    <div className="product-card">
      {/* wrapper 11 min */}
      <div className="wrapper">
        {/* <div className="mt-60px mx-10px mb-10px pt-300px box-border relative shadow-2xl ease-out duration-300"> */}
        <div className="card_img" style={{ backgroundImage: photos }} />
        <div className="card-info">
          <h1 className="product-name">{name}</h1>
          <p className="price">${price}.00</p>
        </div>
      </div>
    </div>
  )
}
