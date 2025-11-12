import styles from './HomePage.module.css';
import add from '../../assets/svg/add.svg';
import { useNavigate } from 'react-router-dom'
import BooksList from '../../components/books-list/BooksList';

export default function HomePage() {

    const navigate = useNavigate()


    return (
        <main className={styles.main}>
            <div className={styles.addBooksSection}>
                <div className={styles.addBooksTitle}>
                    <h2>My Books</h2>
                    <p>Browse and manage your personal library connection</p>
                </div>
                <div className={styles.button} onClick={() => navigate('/books/new')}>
                    <img className={styles.addImage} src={add} alt="add"/>
                    <label>Add New Book</label>
                </div>
            </div>
            <div className={styles.bookListSection}>
                <BooksList></BooksList>
            </div>
        </main>
    )
}