import { rest } from 'msw'

const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes'
const BOOK_STORE_API_URL = 'https://freetestapi.com/api/v1/books'
const GOOGLE_BOOKS = [
  {
    id: 'SqikDwAAQBAJ',
    volumeInfo: {
      title: 'JavaScript - Aprende a programar en el lenguaje de la web',
      authors: ['Fernando Luna'],
      publishedDate: '2019-07-23',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      }
    }
  },
  {
    id: '2zgRDXFWkm8C',
    volumeInfo: {
      title: 'Harry Potter y la piedra filosofal',
      authors: ['J.K. Rowling'],
      publishedDate: '2015-12-08',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=2zgRDXFWkm8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      }
    }
  }
]

const BOOK_STORE = [
  {
    id: 6,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description:
      'An epic fantasy saga about the quest to destroy the One Ring.',
    cover_image: 'https://fakeimg.pl/667x1000/cc6600'
  },
  {
    id: 8,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description:
      "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
    cover_image: 'https://fakeimg.pl/667x1000/cc6600'
  }
]

export const handlers = [
  rest.get(`${GOOGLE_BOOKS_API_URL}`, (req, res, ctx) => {
    const title = req.url.searchParams.get('q') || ''

    const filteredBooks = GOOGLE_BOOKS.filter((book) =>
      book.volumeInfo.title.toLowerCase().includes(title)
    )

    return res(ctx.status(200), ctx.json({ items: filteredBooks }))
  }),

  rest.get(`${BOOK_STORE_API_URL}`, (req, res, ctx) => {
    const title = req.url.searchParams.get('search') || ''

    const filteredBooks = BOOK_STORE.filter((book) =>
      book.title.toLowerCase().includes(title)
    )

    return res(ctx.status(200), ctx.json(filteredBooks))
  })
]
