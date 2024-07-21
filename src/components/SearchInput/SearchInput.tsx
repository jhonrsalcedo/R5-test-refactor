import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { useBooks } from '../../hooks/useBooks'
import { SearchInputProps } from '../../types'
import './SearchInput.css'

function SearchInput({ setResponse, title, isGoogleBooks }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState('')
  const { getBooks, loading, error } = useBooks({ setResponse, isGoogleBooks })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getBooks(searchValue)
    }
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
        onKeyDown={handleKeyPress}
      />
      <button
        className='search-button'
        onClick={() => getBooks(searchValue)}
        disabled={loading}
      >
        <span>{loading ? 'Buscando...' : 'Buscar'}</span>
      </button>
      {loading && <p className='loading'>LOADING...</p>}
      {error && <p>error</p>}
    </div>
  )
}

export default SearchInput
