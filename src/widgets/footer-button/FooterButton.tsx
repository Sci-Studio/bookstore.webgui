import styles from './FooterButton.module.css'
export interface IFooterButtonInput { text?: string | null, imageUrl?: string | null, rotate?: boolean | false}

export default function FooterButton({ text, imageUrl, rotate }: IFooterButtonInput) {

    return (
        <main>
            <div className={styles.button}>
                { imageUrl && <img className={`${styles.img} ${rotate ? styles.rotated : ''}`} src={imageUrl}/> }
                { text && <label>{text}</label> }
            </div>
        </main>
    )
}