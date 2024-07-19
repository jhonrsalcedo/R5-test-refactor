import Book from '../Book'
import { BooksProps } from '../../types'

import './books.css'

const Books = ({ books }: BooksProps) => {
  return (
    <section className='books'>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  )
}

export default Books
