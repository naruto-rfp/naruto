import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between	items-center">
      <ul className="list-none">
        <li>
          <Link className="text-green" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-green" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="text-green" to="/team">
            Team
          </Link>
        </li>
        <li>
          <Link className="text-green" to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="text-green" to="/checkout">
            Checkout
          </Link>
        </li>
      </ul>
    </nav>
  )
}
