import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GoogleBooks from './GoogleBooks'

test('should render the book you are looking for on the google books page.', async () => {
  render(<GoogleBooks />)

  const pageTitle = screen.getByRole('heading', { name: 'GOOGLE BOOKS' })
  expect(pageTitle).toBeInTheDocument()

  const searchInput = screen.getByPlaceholderText('Buscar un libro')
  expect(searchInput).toBeInTheDocument()

  const searchButtonLoading = screen.getByRole('button', {
    name: 'Buscando...'
  })
  expect(searchButtonLoading).toBeInTheDocument()

  const bookTitleJS = await screen.findByText(
    'JavaScript - Aprende a programar en el lenguaje de la web'
  )
  expect(bookTitleJS).toBeInTheDocument()
  const searchButton = screen.getByRole('button', { name: 'Buscar' })
  expect(searchButton).toBeInTheDocument()

  userEvent.type(searchInput, 'harry')
  expect(searchInput).toHaveValue('harry')

  userEvent.click(searchButton)

  const image = await screen.findByRole('img', { name: /harry potter/i })
  expect(image).toBeInTheDocument()

  const imageAlt = await screen.findByAltText(
    'Harry Potter y la piedra filosofal'
  )
  expect(imageAlt).toBeInTheDocument()

  const bookTitle = await screen.findByText(
    'Harry Potter y la piedra filosofal'
  )
  expect(bookTitle).toBeInTheDocument()
})
