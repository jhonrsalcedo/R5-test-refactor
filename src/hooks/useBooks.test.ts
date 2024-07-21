import { renderHook } from '@testing-library/react-hooks'

import { getBookStore, getGoogleBooks } from '../services/books'
import { useBooks } from './useBooks'

jest.mock('../services/books')

describe('useBooks', () => {
  const setResponse = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Google Books', () => {
    test('should fetch books from Google Books and update response', async () => {
      const mockData = [{ title: 'Book 1' }, { title: 'Book 2' }]
      ;(getGoogleBooks as jest.Mock).mockResolvedValue(mockData)

      const { result, waitForNextUpdate } = renderHook(() =>
        useBooks({ setResponse, isGoogleBooks: true })
      )

      expect(result.current.loading).toBe(true)
      await waitForNextUpdate()

      expect(setResponse).toHaveBeenCalledWith(mockData)
      expect(result.current.loading).toBe(false)
      expect(result.current.error).toBeUndefined()
    })

    test('should handle error when fetching books from google books', async () => {
      const mockError = new Error('Failed to fetch google books')
      ;(getGoogleBooks as jest.Mock).mockRejectedValue(mockError)

      const { result, waitForNextUpdate } = renderHook(() =>
        useBooks({ setResponse, isGoogleBooks: true })
      )

      expect(result.current.loading).toBe(true)
      await waitForNextUpdate()

      expect(result.current.loading).toBe(false)
      expect(result.current.error).toBe(mockError)
    })
  })

  describe('Book Store', () => {
    test('should fetch books from Google Books and update response', async () => {
      const mockData = [{ title: 'Book 1' }, { title: 'Book 2' }]
      ;(getGoogleBooks as jest.Mock).mockResolvedValue(mockData)

      const { result, waitForNextUpdate } = renderHook(() =>
        useBooks({ setResponse, isGoogleBooks: false })
      )

      expect(result.current.loading).toBe(true)
      await waitForNextUpdate()

      expect(setResponse).toHaveBeenCalledWith(mockData)
      expect(result.current.loading).toBe(false)
      expect(result.current.error).toBeUndefined()
    })

    test('should handle error when fetching books from google books', async () => {
      const mockError = new Error('Failed to fetch google books')
      ;(getGoogleBooks as jest.Mock).mockRejectedValue(mockError)

      const { result, waitForNextUpdate } = renderHook(() =>
        useBooks({ setResponse, isGoogleBooks: false })
      )

      expect(result.current.loading).toBe(true)
      await waitForNextUpdate()

      expect(result.current.loading).toBe(false)
      expect(result.current.error).toBe(mockError)
    })
  })
})
