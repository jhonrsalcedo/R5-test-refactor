import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'

test('renders navigation links', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })

  const navGoogleBooks = screen.getByRole('link', { name: 'Google Books' })
  const navBookStore = screen.getByRole('link', { name: 'Book Store' })

  expect(navGoogleBooks).toBeInTheDocument()
  expect(navBookStore).toBeInTheDocument()
})

test('App: Should show google books', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  const navGoogleBooks = screen.getByRole('link', { name: 'Google Books' })
  userEvent.click(navGoogleBooks)

  const pageTitle = screen.getByRole('heading', { name: 'GOOGLE BOOKS' })
  const bookTitle = await screen.findByText(
    'JavaScript - Aprende a programar en el lenguaje de la web'
  )

  expect(pageTitle).toBeInTheDocument()
  expect(bookTitle).toBeInTheDocument()
})

test('App: Should show store books', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })

  const navBookStore = screen.getByRole('link', { name: 'Book Store' })
  userEvent.click(navBookStore)

  const pageTitle = screen.getByRole('heading', { name: 'BOOK STORE' })
  const bookTitle = await screen.findByText('The Lord of the Rings')

  expect(pageTitle).toBeInTheDocument()
  expect(bookTitle).toBeInTheDocument()
})
