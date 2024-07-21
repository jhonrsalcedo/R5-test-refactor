import { BookProps } from '../../../types'
import './ContentGoogleBook.css'

const ContentGoogleBook = ({ book }: BookProps) => (
  <div className='book'>
    <div className='book-image'>
      <img alt={book.title} src={book.imageUrl} />
    </div>
    <p className='book-title'>{book.title}</p>
  </div>
)

export default ContentGoogleBook
