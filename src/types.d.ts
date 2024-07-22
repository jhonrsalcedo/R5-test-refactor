// #region GOOGLE BOOKS
export type SearchInputProps = {
  title: string
  setResponse: Function
  isGoogleBooks?: boolean
}

export type UseBooks = {
  setResponse: Function
  isGoogleBooks?: boolean
}

export interface ResponseGoogleBook {
  id: string
  volumeInfo: {
    title: string
    authors
    description
    imageLinks?: {
      thumbnail: string
    }
  }
}

export interface BookInfo {
  id: string | number
  title: string
  authors: string[] | string
  description: string
  imageUrl: string
}

export type BooksProps = {
  books: BookInfo[]
  isGoogleBooks?: boolean
}

export type BookProps = {
  book: BookInfo
}
// #endregion

// #region BOOK STORE
export interface ResponseBookStore {
  id: number
  title: string
  cover_image: string
  author: string
  description: string
}
// #endregion
