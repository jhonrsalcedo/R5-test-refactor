import React from 'react'

import SearchInput from '../SearchInput'
import Books from '../Books'
import { GoogleBook } from '../../types'

export function GoogleBooks() {
  const [data, setData] = React.useState<GoogleBook[]>()

  return (
    <div>
      <SearchInput title='GOOGLE BOOKS' setResponse={setData} />
      {data && <Books books={data} />}
    </div>
  )
}
