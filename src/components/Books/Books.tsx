import ContentGoogleBook from '../GoogleBooks/ContentGoogleBook'
import ContentBookStore from '../BookStore/ContentBookStore'
import { BooksProps } from '../../types'

import './Books.css'

function Books({ books, isGoogleBooks }: BooksProps) {
  return (
    <section className='books'>
      {books.map((book) =>
        isGoogleBooks ? (
          <ContentGoogleBook key={book.id} book={book} />
        ) : (
          <ContentBookStore key={book.id} book={book} />
        )
      )}
    </section>
  )
}

export default Books
