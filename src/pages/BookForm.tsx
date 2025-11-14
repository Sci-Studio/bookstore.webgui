import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './BookForm.css'
import DragDropFile from '../widgets/drag-drop-files/DragDropFile';
import coverImage from '../assets/svg/cover_image.svg';
import uploadImage from '../assets/svg/upload.svg';
const API_BASE = import.meta.env.VITE_API_BASE || '/api'


export default function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [msg, setMsg] = useState('')
    const [uploading, setUploading] = useState(false)

    const dropTitle = 'Upload Book Cover';
    const dropSubTitle = 'Click to browse or drag your image here';
    const dropSupportedFormats = 'Supports PNG, JPG, JPEG up to 10MB';

    const navigate = useNavigate()

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        setMsg('')
        setUploading(true)
        let imageUrl = ''
        try {
            

            if (imageFile) {
                const formData = new FormData()
                formData.append('image', imageFile)

                const uploadRes = await axios.post(`${API_BASE}/upload`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })

                imageUrl = uploadRes.data.imageUrl
            }
        } catch (err) {
            console.error(err)
            setMsg('❌ Failed to save book')
        } finally {
            setUploading(false)
        }
        const priceCents = Math.round(parseFloat(price) * 100)
        await axios.post(`${API_BASE}/books`, { title, author, priceCents, imageUrl })
        setMsg('Saved!')
        setTitle(''); setAuthor(''); setPrice(''); setImageFile(null)
    }


    return (
        <form onSubmit={submit} style={{ padding: 24, display: 'grid', gap: 12, maxWidth: 420 }}>
            <div className='goBackToHomePage' onClick={() => navigate('/')}>
                <label>Go Back To Home Page</label>
            </div>
            <DragDropFile label='Book Cover Image' labelImageUrl={coverImage} imageUrl={uploadImage} title={dropTitle} subTitle={dropSubTitle} supportedFormats={dropSupportedFormats}></DragDropFile>
            <h2>Add a Book</h2>
            <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
            <input placeholder="Author" value={author} onChange={e=>setAuthor(e.target.value)} required />
            <input placeholder="Price (€)" value={price} onChange={e=>setPrice(e.target.value)} type="number" min="0" step="0.01" required />
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)}/>
            <button type="submit">{uploading ? 'Uploading...' : 'Save'}</button>
            <div>{msg}</div>
        </form>
    )
}