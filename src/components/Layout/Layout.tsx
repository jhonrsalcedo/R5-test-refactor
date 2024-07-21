import { Link, Outlet } from 'react-router-dom'
import { AlignJustify, X } from 'lucide-react'

function Layout() {
  return (
    <>
      <header>
        <nav className='nav_book'>
          <h2 className='nav_logo'>R5</h2>
          <input type='checkbox' id='menu' className='check' />
          <label className='nav_open'>
            <AlignJustify color='black' size={38} />
          </label>

          <label className='nav_close'>
            <X color='black' size={38} />
          </label>

          <ul className='nav_menu'>
            <li className='nav_list'>
              <Link to='/'>Google Books</Link>
            </li>
            <li className='nav_list'>
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

export default Layout
