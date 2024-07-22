import { useState } from 'react'

import SearchInput from '../SearchInput/SearchInput'
import Books from '../Books/Books'
import { BookInfo } from '../../types'

function GoogleBooks() {
  const [data, setData] = useState<BookInfo[]>()

  return (
    <section>
      <SearchInput title='GOOGLE BOOKS' setResponse={setData} isGoogleBooks />
      {data && <Books books={data} isGoogleBooks />}
    </section>
  )
}

export default GoogleBooks
