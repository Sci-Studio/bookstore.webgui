import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Books from './pages/Books'
import BookForm from './pages/BookForm'
import './index.css'


const router = createBrowserRouter([
{ path: '/', element: <App /> },
{ path: '/books', element: <Books /> },
{ path: '/books/new', element: <BookForm /> },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
)