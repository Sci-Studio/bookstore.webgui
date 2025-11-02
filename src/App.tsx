import { Link } from 'react-router-dom'

// test protection rule
export default function App() {
  return (
    <main style={{ padding: 24 }}>
      <h1>📚 My Bookstore</h1>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/books">Books</Link>
        <Link to="/books/new">Add Book</Link>
      </nav>
    </main>
  )
}