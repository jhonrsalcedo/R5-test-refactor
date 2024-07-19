import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Google Books</Link>
            </li>
            <li>
              <Link to='/bookstore'>Bookstore</Link>
            </li>
          </ul>
        </nav>

        <hr />
      </header>

      <Outlet />
    </>
  )
}
