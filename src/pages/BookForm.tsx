import { useState } from 'react'
import axios from 'axios'


const API_BASE = import.meta.env.VITE_API_BASE || '/api'


export default function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    const [msg, setMsg] = useState('')


    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        const priceCents = Math.round(parseFloat(price) * 100)
        await axios.post(`${API_BASE}/books`, { title, author, priceCents })
        setMsg('Saved!')
        setTitle(''); setAuthor(''); setPrice('')
    }


    return (
        <form onSubmit={submit} style={{ padding: 24, display: 'grid', gap: 12, maxWidth: 420 }}>
            <h2>Add a Book</h2>
            <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
            <input placeholder="Author" value={author} onChange={e=>setAuthor(e.target.value)} required />
            <input placeholder="Price (€)" value={price} onChange={e=>setPrice(e.target.value)} type="number" min="0" step="0.01" required />
            <button type="submit">Save</button>
            <div>{msg}</div>
        </form>
    )
}