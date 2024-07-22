import { useState } from 'react'

import SearchInput from '../SearchInput/SearchInput'
import Books from '../Books/Books'
import { BookInfo } from '../../types'

function BookStore() {
  const [data, setData] = useState<BookInfo[]>()

  return (
    <div>
      <SearchInput title='BOOK STORE' setResponse={setData} />
      {data && <Books books={data} />}
    </div>
  )
}

export default BookStore
