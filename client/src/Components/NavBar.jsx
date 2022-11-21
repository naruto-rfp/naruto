import { Link } from 'react-router-dom'

export default function NavBar({ session, logout }) {
  return (
    <nav className="flex flex-row justify-between	items-center">
      <ul className="list-none">
        <li>
          <Link className="text-gray-800" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-gray-800" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="text-gray-800" to="/team">
            Team
          </Link>
        </li>
        <li>
          <Link className="text-gray-800" to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="text-gray-800" to="/checkout">
            Checkout
          </Link>
        </li>
        {session && (
          <button type="button" onClick={logout}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  )
}
