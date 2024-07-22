import { BookProps } from '../../../types'
import './ContentGoogleBook.css'

const ContentGoogleBook = ({ book: { title, imageUrl } }: BookProps) => (
  <div className='book'>
    <div className='book-image'>
      <img alt={title} src={imageUrl} />
    </div>
    <p className='book-title'>{title}</p>
  </div>
)

export default ContentGoogleBook
