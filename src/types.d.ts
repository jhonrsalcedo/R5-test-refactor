export type SearchInputProps = {
  title: string
  setResponse: Function
}

export type UseBooks = {
  setResponse: Function
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

export interface GoogleBook {
  id: string
  title: string
  authors: string[]
  description: string
  imageUrl: string
}

export type BooksProps = {
  books: GoogleBook[]
}

export type BookProps = {
  book: GoogleBook
}
