import axios from 'axios'

import { ResponseGoogleBook } from '../types'

const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes'

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

export function getOtherBooks(title: string = 'lord') {
  return axios.get(`https://freetestapi.com/api/v1/books?search=${title}`)
}
