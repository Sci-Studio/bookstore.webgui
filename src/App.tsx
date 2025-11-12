import { useNavigate, NavLink } from 'react-router-dom'
import './App.css'
import myLogo from './assets/svg/logo.svg';
import add from './assets/svg/add.svg';
import BooksList from './components/books-list/BooksList';

export default function App() {

  const navigate = useNavigate()

  return (
    <div>
      <header className='header'>
        <div className='headerContainer'>
          <div className='logo'>
            <div className='ImageContainer'>
              <img className='logoImage' src={myLogo} alt="Logo"/>
            </div>
            <label className='logoLabel'>BookLibrary</label>
          </div>
          <div className='navigation'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Dashboard</NavLink>
            <NavLink to="/books/new" className={({ isActive }) => isActive ? 'active-link' : ''}>Add Book</NavLink>
          </div>
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
          <BooksList></BooksList>
        </div>
      </main>
    </div>
  )
}