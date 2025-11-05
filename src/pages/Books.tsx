import { useEffect, useState } from 'react'
import axios from 'axios'


interface Book { id: number; title: string; author: string; priceCents: number; imageUrl?: string | null }


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
                {books.map((b) => (
                    <li
                        key={b.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 16,
                          border: '1px solid #ddd',
                          borderRadius: 8,
                          padding: 12,
                          background: '#fafafa',
                         }}
                    >
                        {/* ✅ show cover if exists */}
                        {b.imageUrl ? (
                <img
                    src={b.imageUrl}
                    alt={b.title}
                    style={{
                      width: 80,
                      height: 100,
                      objectFit: 'cover',
                      borderRadius: 4,
                    }}
                />
                        ) : (
                    <div
                        style={{
                          width: 80,
                          height: 100,
                          background: '#eee',
                          borderRadius: 4,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#999',
                          fontSize: 12,
                        }}
                    >
                        No Image
                    </div>
                        )}

                        <div>
                          <strong>{b.title}</strong>
                          <div>{b.author}</div>
                          <div style={{ color: '#555' }}>€{(b.priceCents / 100).toFixed(2)}</div>
                        </div>
                  </li>
                ))}
            </ul>
        </section>
    )
}