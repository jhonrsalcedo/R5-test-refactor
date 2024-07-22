import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import BookStore from './BookStore'

test('should render a book you are viewing on the Book Store', async () => {
  render(<BookStore />)

  const pageTitle = screen.getByRole('heading', { name: 'BOOK STORE' })
  expect(pageTitle).toBeInTheDocument()

  const searchInput = screen.getByPlaceholderText('Buscar un libro')
  expect(searchInput).toBeInTheDocument()

  const searchButtonLoading = screen.getByRole('button', {
    name: 'Buscando...'
  })
  expect(searchButtonLoading).toBeInTheDocument()

  const bookTitleTLR = await screen.findByText('The Lord of the Rings')
  expect(bookTitleTLR).toBeInTheDocument()

  const searchButton = screen.getByRole('button', { name: 'Buscar' })
  expect(searchButton).toBeInTheDocument()

  userEvent.type(searchInput, 'the hobbit')
  expect(searchInput).toHaveValue('the hobbit')

  userEvent.click(searchButton)

  const image = await screen.findByRole('img', { name: /the hobbit/i })
  expect(image).toBeInTheDocument()

  const imageAlt = await screen.findByAltText('The Hobbit')
  expect(imageAlt).toBeInTheDocument()

  const bookTitle = await screen.findByText('The Hobbit')
  expect(bookTitle).toBeInTheDocument()
})
