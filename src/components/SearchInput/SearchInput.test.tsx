import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchInput from './SearchInput'

test('asdadf', async () => {
  render(
    <SearchInput title={'Test'} isGoogleBooks={true} setResponse={jest.fn()} />
  )

  const pageTitle = screen.getByRole('heading', { name: 'Test' })
  expect(pageTitle).toBeInTheDocument()

  const searchButtonLoading = screen.getByRole('button', {
    name: 'Buscando...'
  })
  expect(searchButtonLoading).toBeInTheDocument()

  const searchButton = await screen.findByRole('button', { name: 'Buscar' })
  expect(searchButton).toBeInTheDocument()
})
