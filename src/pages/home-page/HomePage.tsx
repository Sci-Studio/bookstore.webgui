import styles from './HomePage.module.css';
import add from '../../assets/svg/add.svg';
import { useNavigate } from 'react-router-dom'
import ToolBar from '../../components/tool-bar/ToolBar';
import BooksList from '../../components/books-list/BooksList';
import PushButton from '../../widgets/push-button/PushButton';
import { useState } from 'react';

export default function HomePage() {

    const navigate = useNavigate()

    const [filter, setFiltered] = useState<string>("");

    return (
        <main className={styles.main}>
            <div className={styles.addBooksSection}>
                <div className={styles.addBooksTitle}>
                    <h2>My Books</h2>
                    <p>Browse and manage your personal library connection</p>
                </div>
                <PushButton imageUrl={add} text='Add New Book' className={styles.addButton} onClick={() => navigate('/books/new')}></PushButton>
            </div>
            <div className={styles.toolBarSection}>
                <ToolBar onSearch={(query) => setFiltered(query)}></ToolBar>
            </div>
            <div className={styles.bookListSection}>
                <BooksList filter={filter}></BooksList>
            </div>
        </main>
    )
}