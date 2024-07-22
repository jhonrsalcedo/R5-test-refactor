import { Link, Outlet } from 'react-router-dom'
import { LuBookOpen } from 'react-icons/lu'
import './Menu.css'
function Menu() {
  return (
    <>
      <header className='menu-book'>
        <nav>
          <h2>R5</h2>

          <ul>
            <li>
              <Link to='/'>
                <LuBookOpen className='menu-icon-book' />
                <span>Google Books</span>
              </Link>
            </li>
            <li>
              <Link to='/bookstore'>
                <LuBookOpen className='menu-icon-book' />
                <span>Book Store</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default Menu
