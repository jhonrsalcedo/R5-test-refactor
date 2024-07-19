import { useEffect } from 'react'
import axios from 'axios'

// import { getGoogleBooks } from '../services/books'
import { UseBooks } from '../types'

export function useBooks({ setResponse }: UseBooks) {
  const getBooks = (title: string = 'javascript') => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
      .then((response) => setResponse(response))
  }

  useEffect(() => {
    getBooks()
  }, [])

  return { getBooks }
}
