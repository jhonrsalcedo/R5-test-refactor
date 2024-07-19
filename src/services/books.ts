import axios from 'axios'

import { ResponseGoogleBook, ResponseBookStore } from '../types'

const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes'
const BOOK_STORE_API_URL = 'https://freetestapi.com/api/v1/books'

export async function getGoogleBooks(title: string = 'javascript') {
  try {
    const response = await axios.get(`${GOOGLE_BOOKS_API_URL}?q=${title}`)
    const { items } = response?.data

    return items?.map((item: ResponseGoogleBook) => {
      const { id, volumeInfo } = item
      const { title, imageLinks, authors, description } = volumeInfo

      return {
        id,
        title,
        imageUrl: imageLinks?.thumbnail || 'https://picsum.photos/200/260',
        authors,
        description
      }
    })
  } catch (error) {
    throw new Error('Error fetching Google Books')
  }
}

export async function getBookStore(title: string = 'lord') {
  try {
    const { data } = await axios.get(`${BOOK_STORE_API_URL}?search=${title}`)

    return data?.map((item: ResponseBookStore) => {
      const { id, title, author, cover_image, description } = item

      return {
        id,
        title,
        imageUrl: 'https://picsum.photos/200/260' || cover_image,
        authors: author,
        description
      }
    })
  } catch (error) {
    throw new Error('Error fetching Book Store')
  }
}
