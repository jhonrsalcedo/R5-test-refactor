import { useState } from 'react'

import SearchInput from '../SearchInput'
import Books from '../Books'
import { BookInfo } from '../../types'

export function BookStore() {
  const [data, setData] = useState<BookInfo[]>()

  return (
    <div>
      <SearchInput title='BOOK STORE' setResponse={setData} />
      {data && <Books books={data} />}
    </div>
  )
}
