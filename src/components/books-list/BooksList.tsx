import { useEffect, useState } from 'react'
import type { IBook }  from '../../widgets/book-tile/Book'
import axios from 'axios'
import styles from './BooksList.module.css'
import Book from '../../widgets/book-tile/Book'
import FooterButton from '../../widgets/footer-button/FooterButton'
import leftArrow from '../../assets/svg/left_arrow.svg';

const API_BASE = import.meta.env.VITE_API_BASE || '/api'

const BOOKS_PER_PAGE = 8;

interface IBooksListProps {
  filter?: string
}

export default function BooksList({ filter = '' }: IBooksListProps) {

    const [books, setBooks] = useState<Array<IBook>>([])
    const [filtered, setFiltered] = useState<Array<IBook>>([]);
    const [page, setPage] = useState(0);

    const startIndex = page * BOOKS_PER_PAGE;
    const visibleBooks = filtered.slice(startIndex, startIndex + BOOKS_PER_PAGE);
    const totalPages = Math.ceil(filtered.length / BOOKS_PER_PAGE);

    const getVisiblePages = () => {
        if (totalPages <= 4) {
          return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (page < 2) return [1, 2, 3, totalPages];
        if (page >= totalPages - 2)
          return [1, totalPages - 2, totalPages - 1, totalPages];

        return [1, page, page + 1, totalPages];
    };

    const visiblePages = getVisiblePages();

    useEffect(() => {
        axios.get(`${API_BASE}/books`).then(r => setBooks(r.data))
    }, [])

    useEffect(() => {
      const q = filter.toLowerCase();
      setFiltered(
        books.filter(
          (b) =>
            b.title.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q)
        )
      );
    }, [filter, books]);

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
                <FooterButton 
                    imageUrl={leftArrow}
                    disabled={page === 0}
                    onClick={() => setPage((p) => Math.max(p - 1, 0))}></FooterButton>
                {visiblePages.map((p, idx) => (
                    <FooterButton
                        key={idx}
                        text={p.toString()}
                        onClick={() => setPage(p - 1)}></FooterButton>
                ))}
                {totalPages > 4 && page < totalPages - 3 && <span>…</span>}
                <FooterButton 
                    imageUrl={leftArrow}
                    rotate
                    disabled={page >= totalPages - 1}
                    onClick={(() => setPage((p) => Math.min(p + 1, totalPages - 1)))}></FooterButton>
            </div>
        </main>
    )
}