import { useEffect, useState } from 'react'
import axios from 'axios'


interface Book { id: number; title: string; author: string; priceCents: number; }


const API_BASE = import.meta.env.VITE_API_BASE || '/api'


export default function Books() {
    const [books, setBooks] = useState<Book[]>([])


    useEffect(() => {
        axios.get(`${API_BASE}/books`).then(r => setBooks(r.data))
    }, [])


    return (
        <section style={{ padding: 24 }}>
            <h2>Books</h2>
            <ul>
                {books.map(b => (
                    <li key={b.id}>
                        <strong>{b.title}</strong> — {b.author} — €{(b.priceCents/100).toFixed(2)}
                    </li>
                ))}
            </ul>
        </section>
    )
}