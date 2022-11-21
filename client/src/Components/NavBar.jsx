import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between	items-center">
      <ul className="list-none">
        <li>
          <Link className="text-black" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-black" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="text-black" to="/team">
            Team
          </Link>
        </li>
        <li>
          <Link className="text-black" to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="text-black" to="/checkout">
            Checkout
          </Link>
        </li>
        <li>
          <Link className="text-black" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}
