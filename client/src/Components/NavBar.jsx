import { Link } from 'react-router-dom'

export default function NavBar({ session, logout }) {
  const liStyle = 'list-none inline-block px-10 pt-4 relative text-gray-800'

  return (
    <nav className="flex flex-row px-8 pt-8 pb-4 justify-center items-center">
      <ul>
        <li className={liStyle}>
          <Link to="/">Home</Link>
        </li>
        <li className={liStyle}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={liStyle}>
          <Link to="/team">Team</Link>
        </li>
        <li className={liStyle}>
          <Link to="/store">Store</Link>
        </li>
        <li className={liStyle}>
          <Link to="/checkout">Checkout</Link>
        </li>
        {session && (
          <button className={liStyle} type="button" onClick={logout}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  )
}
