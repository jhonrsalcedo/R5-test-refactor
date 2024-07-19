import { useEffect } from 'react'

import { getGoogleBooks, getBookStore } from '../services/books'
import { UseBooks } from '../types'

export function useBooks({ setResponse, isGoogleBooks }: UseBooks) {
  const getBooks = (title?: string) => {
    const promiseBooks = isGoogleBooks
      ? getGoogleBooks(title)
      : getBookStore(title)

    promiseBooks.then((data) => setResponse(data))
  }

  useEffect(() => {
    getBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { getBooks }
}
