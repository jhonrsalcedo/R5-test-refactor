import { useState } from 'react'

import SearchInput from '../SearchInput'
import Books from '../Books'
import { BookInfo } from '../../types'

export function GoogleBooks() {
  const [data, setData] = useState<BookInfo[]>()

  return (
    <div>
      <SearchInput title='GOOGLE BOOKS' setResponse={setData} isGoogleBooks />
      {data && <Books books={data} />}
    </div>
  )
}
