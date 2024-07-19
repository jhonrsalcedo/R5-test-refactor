import React, { ChangeEvent } from 'react'
import axios from 'axios'
import './searchInputBookStore.css'

interface SearchInputProps {
  setResponse: Function
}

const SearchInputBookStore = ({ setResponse }: SearchInputProps) => {
  const [searchValue, setSearchValue] = React.useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  function getBooks(title: string = 'lord') {
    axios
      .get(`https://freetestapi.com/api/v1/books?search=${title}`)
      .then((response) => setResponse(response))
  }

  React.useEffect(() => {
    getBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='search'>
      <h1>BookStore</h1>
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

export default SearchInputBookStore
