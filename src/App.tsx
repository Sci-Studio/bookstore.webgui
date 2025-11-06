// import { Link } from 'react-router-dom'
import './App.css'
import myLogo from './assets/svg/logo.svg';
import add from './assets/svg/add.svg';

export default function App() {
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
      <main>
        <div className='addBooksSection'>
          <div className='addBooksTitle'>
            <h2>My Books</h2>
            <p>Browse and manage your personal library connection</p>
          </div>
          <div className='button'>
            <img className='addImage' src={add} alt="add"/>
            <label>Add New Book</label>
          </div>
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