import { useNavigate } from 'react-router-dom'
import './App.css'
import myLogo from './assets/svg/logo.svg';
import add from './assets/svg/add.svg';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Book  from './widgets/book-tile/Book'
import type { IBook }  from './widgets/book-tile/Book'

const API_BASE = import.meta.env.VITE_API_BASE || '/api'

export default function App() {
  const [books, setBooks] = useState<Array<IBook>>([])

  const navigate = useNavigate()

  useEffect(() => {
      axios.get(`${API_BASE}/books`).then(r => setBooks(r.data))
  }, [])

  return (
    <div>
      <header>
        <div className='logo'>
          <div className='ImageContainer'>
            <img className='logoImage' src={myLogo} alt="Logo"/>
          </div>
          <label className='logoLabel'>BookLibrary</label>
        </div>
        <div className='navigation'>
          <div>Dashboard</div>
          <div>Add Book</div>
        </div>
      </header>
      <main className='mainContainer'>
        <div className='addBooksSection'>
          <div className='addBooksTitle'>
            <h2>My Books</h2>
            <p>Browse and manage your personal library connection</p>
          </div>
          <div className='button' onClick={() => navigate('/books/new')}>
            <img className='addImage' src={add} alt="add"/>
            <label>Add New Book</label>
          </div>
        </div>
        <div className='searchSection'>

        </div>
        <div className='bookListSection'>
            {books.map((b, idx) => (
              <Book
                key={idx}
                title={b.title}
                author={b.author}
                priceCents={b.priceCents}
                imageUrl={b.imageUrl}
              />
            ))}
        </div>
      </main>
    </div>
    // <main style={{ padding: 24 }}>
    //   <h1>📚 My Bookstore</h1>
    //   <nav style={{ display: 'flex', gap: 12 }}>
    //     <Link to="/books">Books</Link>
    //     <Link to="/books/new">Add Book</Link>
    //   </nav>
    // </main>
  )
}