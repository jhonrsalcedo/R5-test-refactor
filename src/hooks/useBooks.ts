import { useEffect, useState } from 'react'

import { getGoogleBooks, getBookStore } from '../services/books'
import { UseBooks } from '../types'

export function useBooks({ setResponse, isGoogleBooks }: UseBooks) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const getBooks = (title?: string) => {
    setLoading(true)
    const promiseBooks = isGoogleBooks
      ? getGoogleBooks(title)
      : getBookStore(title)

    promiseBooks
      .then((data) => setResponse(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { getBooks, loading, error }
}
