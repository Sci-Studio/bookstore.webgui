import './Book.css'

export interface IBook { title: string; author: string; priceCents: number; imageUrl?: string | null }

export default function Book({ title, author, priceCents, imageUrl }: IBook) {

    return (
        <main className='container'>
            {imageUrl ? 
                (<img className='bookImage'
                    src={imageUrl || ''}
                    alt='No Image Available'
                />) : 
                (<div className='noImage'>No Image
                </div>)
                }
            <div className="bookInfo">
                <h3>{title}</h3>
                <p>{author}</p>
                <div>€{(priceCents / 100).toFixed(2)}</div>
            </div>
        </main>
    )
}