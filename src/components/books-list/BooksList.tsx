import { useEffect, useState } from 'react'
import type { IBook }  from '../../widgets/book-tile/Book'
import axios from 'axios'
import styles from './BooksList.module.css'
import Book from '../../widgets/book-tile/Book'
import FooterButton from '../../widgets/footer-button/FooterButton'
import leftArrow from '../../assets/svg/left_arrow.svg';

const API_BASE = import.meta.env.VITE_API_BASE || '/api'

const BOOKS_PER_PAGE = 8;

export default function BooksList() {

    const [books, setBooks] = useState<Array<IBook>>([])
    const [page, setPage] = useState(0);
    const startIndex = page * BOOKS_PER_PAGE;
    const visibleBooks = books.slice(startIndex, startIndex + BOOKS_PER_PAGE);
    const totalPages = Math.ceil(books.length / BOOKS_PER_PAGE);

    useEffect(() => {
        axios.get(`${API_BASE}/books`).then(r => setBooks(r.data))
    }, [])

    return (
        <main>
            <div className={styles.booksList}>
                {visibleBooks.map((b, idx) => (
                    <Book
                      key={idx}
                      title={b.title}
                      author={b.author}
                      priceCents={b.priceCents}
                      imageUrl={b.imageUrl}
                    />
                ))}
            </div>
            <div className={styles.footer}>
                <FooterButton imageUrl={leftArrow} onClick={() => setPage((p) => Math.max(p - 1, 0))}></FooterButton>
                <FooterButton imageUrl={leftArrow} rotate onClick={(() => setPage((p) => Math.min(p + 1, totalPages - 1)))}></FooterButton>
            </div>
        </main>
    )
}