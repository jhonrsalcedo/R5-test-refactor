import React, { ChangeEvent } from 'react'

import { useBooks } from '../../hooks/useBooks'
import { SearchInputProps } from '../../types'
import './SearchInput.css'

const SearchInput = ({
  setResponse,
  title,
  isGoogleBooks
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = React.useState('')
  const { getBooks, loading, error } = useBooks({ setResponse, isGoogleBooks })

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  return (
    <div className='search'>
      <h1>{title}</h1>
      <input
        className='search-input'
        type='text'
        placeholder='Buscar un libro'
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className='search-button' onClick={() => getBooks(searchValue)}>
        Buscar
      </button>
      {loading && <p>Cargando...</p>}
      {error && <p>error</p>}
    </div>
  )
}

export default SearchInput
