import { useState } from 'react'

import SearchInput from '../SearchInput'
import Books from '../Books/Books'
import { BookInfo } from '../../types'

function GoogleBooks() {
  const [data, setData] = useState<BookInfo[]>()

  return (
    <div>
      <SearchInput title='GOOGLE BOOKS' setResponse={setData} isGoogleBooks />
      {data && <Books books={data} isGoogleBooks />}
    </div>
  )
}

export default GoogleBooks
