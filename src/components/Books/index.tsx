import BookGoogle from '../GoogleBooks/Book'
import BookStore from '../BookStore/Book'
import { BooksProps } from '../../types'

import './books.css'

const Books = ({ books, isGoogleBooks }: BooksProps) => {
  return (
    <section className='books'>
      {books.map((book) =>
        isGoogleBooks ? (
          <BookGoogle key={book.id} book={book} />
        ) : (
          <BookStore key={book.id} book={book} />
        )
      )}
    </section>
  )
}

export default Books
