import { useState, useEffect, MouseEvent, ChangeEvent, FormEvent } from 'react'
import Modal from '../../Modal/Modal'

import { BookProps } from '../../../types'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import './ContentBookStore.css'

function ContentBookStore({
  book: { id, title, authors, description, imageUrl }
}: BookProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<string[]>([])

  // Cargar el estado inicial de favoritos desde localStorage
  useEffect(() => {
    const favoriteBooks = JSON.parse(
      localStorage.getItem('favoriteBooks') || '[]'
    )
    setIsFavorite(favoriteBooks.includes(id))

    const savedComments = JSON.parse(
      localStorage.getItem(`comments-${id}`) || '[]'
    )
    setComments(savedComments)
  }, [id])

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
        (bookId: number) => bookId !== id
      )
      localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites))
    } else {
      favoriteBooks.push(id)
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
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments))
    setComment('')
  }

  return (
    <div className='bookstore' onClick={openModal}>
      <div className='bookstore-image'>
        <img alt={title} src={imageUrl} />
      </div>
      <p className='bookstore-title'>{title}</p>
      <span
        className={`favorite-icon ${isFavorite ? 'favorite' : ''}`}
        onClick={toggleFavorite}
      >
        {isFavorite ? <FaHeart color='red' /> : <FaRegHeart color='red' />}
      </span>
      {/* <button onClick={openModal}>Ver mas...</button> */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='wrapper-modal'>
          <h2>{`Details Book ${title}`}</h2>
          <div className='content-description'>
            <img alt={title} src={imageUrl} />
            <div className='description'>
              <p>
                <span>Author:</span>
                {` ${authors}`}
              </p>
              <br />
              <span>Description:</span>
              <p>{`${description}`}</p>
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
