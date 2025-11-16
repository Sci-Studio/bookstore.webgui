import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddBookPage.module.css';
import PushButton from '../../widgets/push-button/PushButton';
import InputField from '../../widgets/input-field/InputField';
import DragDropFile from '../../widgets/drag-drop-files/DragDropFile';
import add from '../../assets/svg/add.svg';
import authorLogo from '../../assets/svg/author.svg';
import dollarLogo from '../../assets/svg/dollar.svg';
import close from '../../assets/svg/close.svg';
import bookLogo from '../../assets/svg/book.svg';
import coverImage from '../../assets/svg/cover_image.svg';
import uploadImage from '../../assets/svg/upload.svg';
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || '/api'

export default function AddBookPage() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [msg, setMsg] = useState('');
    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate();

    const dropTitle = 'Upload Book Cover';
    const dropSubTitle = 'Click to browse or drag your image here';
    const dropSupportedFormats = 'Supports PNG, JPG, JPEG up to 10MB';

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
        <main className={styles.main}>
            <div className={styles.addBookSection}>
                <label className={styles.addBookLabel}>Add New Book</label>
                <label className={styles.addBookSubtitle}>Expand your digital library by adding a new book with all the essential details and cover image</label>
            </div>
            <div className={styles.bookForm}>
                <form className={styles.formContainer}>
                    <div className={styles.bookParameter}>
                        <InputField text='Book Name' className={styles.inputBookName} imageUrl={bookLogo} placeholder='Enter the book title' onChange={(e) => setTitle(e.target.value)}></InputField>
                        <div className={styles.authorPrice}>
                            <InputField text='Author' className={styles.inputAuthorPrice} imageUrl={authorLogo} placeholder='Enter author name' onChange={(e) => setAuthor(e.target.value)}></InputField>
                            <InputField text='Price' className={styles.inputAuthorPrice} imageUrl={dollarLogo} placeholder='0.00' onChange={(e) => setPrice(e.target.value)}></InputField>
                        </div>
                    </div>
                    <div className={styles.bookImage}>
                        <DragDropFile label='Book Cover Image'
                          labelImageUrl={coverImage}
                          imageUrl={uploadImage}
                          title={dropTitle}
                          subTitle={dropSubTitle}
                          supportedFormats={dropSupportedFormats}
                          onFile={(e) => setImageFile(e)}></DragDropFile>
                    </div>
                    <div className={styles.formControls}>
                        <PushButton imageUrl={close} text='Cancel' className={styles.cancelButton} onClick={() => navigate('/')}></PushButton>
                        <PushButton imageUrl={add} text={uploading ? 'Uploading...' : 'Add Book to Library'} className={styles.addButton} onClick={() => submit}></PushButton>
                    </div>
                    <div>{msg}</div>
                </form>
            </div>
            <div className={styles.recentBooks}></div>
        </main>
    )

}