import React from 'react'

import SearchInput from '../SearchInput'
import { BookType } from '../Book'
import Books from '../Books'

interface Response {
  data?: {
    items: BookType[]
  }
}

export function GoogleBooks() {
  const [response, setResponse] = React.useState<Response>({})

  return (
    <div>
      <SearchInput setResponse={setResponse} />
      {response.data && <Books books={response.data.items} />}
    </div>
  )
}
