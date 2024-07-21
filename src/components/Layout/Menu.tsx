import { Link, Outlet } from 'react-router-dom'
import { BookOpenText, BookText } from 'lucide-react'
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
                <BookOpenText className='menu-icon-book' />
                <span>Google Books</span>
              </Link>
            </li>
            <li>
              <Link to='/bookstore'>
                <BookText className='menu-icon-book' />
                <span>Bookstore</span>
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
