import React from 'react'
import SearchInputBookStore from '../SearchInputBookStore'
import Books from './Books'
import { BookType } from './Book'

interface Response {
  data?: BookType[]
}

export function Bookstore() {
  const [response, setResponse] = React.useState<Response>({})

  return (
    <div>
      <SearchInputBookStore setResponse={setResponse} />
      {response.data && <Books books={response.data} />}
    </div>
  )
}
