import { Link } from 'react-router-dom'

export default function NavBar({ session, logout }) {
  const liStyle =
    'list-none centered px-10 py-2 relative text-gray-600 hover:bg-gray-200 hover:text-gray-800 rounded-md transition-colors duration-200'

  return (
    <nav className="shadow-lg px-8 py-6">
      <ul className="flex flex-row justify-center items-center">
        <Link to="/">
          <li className={liStyle}>Home</li>
        </Link>
        <Link to="/profile">
          <li className={liStyle}>Profile</li>
        </Link>
        <Link to="/team">
          <li className={liStyle}>Team</li>
        </Link>
        <Link to="/store">
          <li className={liStyle}>Store</li>
        </Link>
        <Link to="/checkout">
          <li className={liStyle}>Checkout</li>
        </Link>
        {session && (
          <button className={liStyle} type="button" onClick={logout}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  )
}
