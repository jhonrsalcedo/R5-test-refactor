import { BookProps } from '../../types'
import './book.css'

const Book = ({ book }: BookProps) => (
  <div className='book'>
    <div className='book-image'>
      <img alt={book.title} src={book.imageUrl} />
    </div>
    <p className='book-title'>{book.title}</p>
  </div>
)

export default Book
