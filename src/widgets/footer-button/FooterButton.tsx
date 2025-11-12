import styles from './FooterButton.module.css'
export interface IFooterButtonInput { 
    text?: string | null,
    imageUrl?: string | null,
    rotate?: boolean,
    onClick?: () => void;
 }

export default function FooterButton({ text, imageUrl, rotate = false, onClick }: IFooterButtonInput) {

    const handleClick = () => {
        if (onClick) 
            onClick();
    };

    return (
        <main>
            <div className={styles.button} onClick={handleClick}>
                { imageUrl && <img className={`${styles.img} ${rotate ? styles.rotated : ''}`} src={imageUrl}/> }
                { text && <label>{text}</label> }
            </div>
        </main>
    )
}