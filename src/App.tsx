import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import GoogleBooks from './components/GoogleBooks/GoogleBooks'
import BookStore from './components/BookStore/BookStore'
import { NotFound } from './components/NotFound'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<GoogleBooks />} />
        <Route path='bookstore' element={<BookStore />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
