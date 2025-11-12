import { useNavigate } from 'react-router-dom'
import './App.css'
import add from './assets/svg/add.svg';
import HeaderBar from './components/header-bar/HeaderBar'
import BooksList from './components/books-list/BooksList';

export default function App() {

  const navigate = useNavigate()

  return (
    <div>
      <HeaderBar></HeaderBar>
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