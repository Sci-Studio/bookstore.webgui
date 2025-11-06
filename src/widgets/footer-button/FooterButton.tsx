import styles from './FooterButton.module.css'
export interface IFooterButtonInput { text?: string | null, imageUrl?: string | null}

export default function FooterButton({ text, imageUrl }: IFooterButtonInput) {

    return (
        <main>
            <div className={styles.button}>
                { imageUrl && <img className={styles.img} src={imageUrl}/> }
                { text && <label>{text}</label> }
            </div>
        </main>
    )
}