import { useState, useEffect, MouseEvent, ChangeEvent, FormEvent } from 'react'
import Modal from '../../Modal/Modal'

import { BookProps } from '../../../types'
import './ContentBookStore.css'

function ContentBookStore({ book }: BookProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<string[]>([])

  // Cargar el estado inicial de favoritos desde localStorage
  useEffect(() => {
    const favoriteBooks = JSON.parse(
      localStorage.getItem('favoriteBooks') || '[]'
    )
    setIsFavorite(favoriteBooks.includes(book.id))

    const savedComments = JSON.parse(
      localStorage.getItem(`comments-${book.id}`) || '[]'
    )
    setComments(savedComments)
  }, [book.id])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = (event: MouseEvent) => {
    event.stopPropagation()
    setIsModalOpen(false)
  }

  const toggleFavorite = (e: MouseEvent) => {
    e.stopPropagation()
    const favoriteBooks = JSON.parse(
      localStorage.getItem('favoriteBooks') || '[]'
    )
    if (isFavorite) {
      const updatedFavorites = favoriteBooks.filter(
        (id: number) => id !== book.id
      )
      localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites))
    } else {
      favoriteBooks.push(book.id)
      localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks))
    }
    setIsFavorite(!isFavorite)
  }

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault()
    const updatedComments = [...comments, comment]
    setComments(updatedComments)
    localStorage.setItem(`comments-${book.id}`, JSON.stringify(updatedComments))
    setComment('')
  }

  return (
    <div className='bookstore' onClick={openModal}>
      <div className='bookstore-image'>
        <img alt={book.title} src={book.imageUrl} />
      </div>
      <p className='bookstore-title'>{book.title}</p>
      <span
        className={`favorite-icon ${isFavorite ? 'favorite' : ''}`}
        onClick={toggleFavorite}
      >
        {isFavorite ? '★' : '☆'}
      </span>
      {/* <button onClick={openModal}>Ver mas...</button> */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='wrapper-modal'>
          <h2>{`Details Book ${book.title}`}</h2>
          <div className='content-description'>
            <img alt={book.title} src={book.imageUrl} />
            <div className='description'>
              <p>
                <span>Author:</span>
                {` ${book.authors}`}
              </p>
              <br />
              <span>Description:</span>
              <p>{`${book.description}`}</p>
            </div>
          </div>

          <form onSubmit={handleCommentSubmit}>
            <textarea
              className='modal-textarea'
              value={comment}
              onChange={handleCommentChange}
              placeholder='Add your comment here'
            />
            <button type='submit' className='modal-button'>
              Leave a comment
            </button>
            <div className='comments'>
              <h3>Comments:</h3>
              {comments.length > 0 ? (
                comments.map((comment, index) => <p key={index}>{comment}</p>)
              ) : (
                <p>No comments yet</p>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default ContentBookStore
