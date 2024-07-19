import { useEffect } from 'react'

import { getGoogleBooks } from '../services/books'
import { UseBooks } from '../types'

export function useBooks({ setResponse }: UseBooks) {
  const getBooks = (title: string = 'javascript') => {
    getGoogleBooks(title).then((data) => setResponse(data))
  }

  useEffect(() => {
    getBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { getBooks }
}
