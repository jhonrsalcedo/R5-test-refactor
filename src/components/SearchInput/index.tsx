import React, { ChangeEvent } from 'react'

import { useBooks } from '../../hooks/useBooks'
import { SearchInputProps } from '../../types'
import './SearchInput.css'

const SearchInput = ({ setResponse, title }: SearchInputProps) => {
  const [searchValue, setSearchValue] = React.useState('')
  const { getBooks } = useBooks({ setResponse })

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
    </div>
  )
}

export default SearchInput
