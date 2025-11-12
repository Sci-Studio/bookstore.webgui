import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import BookForm from './pages/book-form/BookForm'
import HomePage from './pages/home-page/HomePage'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  
    children: [
      { index: true, element: <HomePage /> }, 
      { path: 'books/new', element: <BookForm /> }, 
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)