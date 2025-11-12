import styles from './FooterButton.module.css'
export interface IFooterButtonInput { 
    text?: string | null,
    imageUrl?: string | null,
    rotate?: boolean,
    disabled?: boolean; 
    onClick?: () => void;
 }

export default function FooterButton({ text, imageUrl, rotate = false, disabled = false, onClick }: IFooterButtonInput) {

    const handleClick = () => {
        if (!disabled && onClick) 
            onClick();
    };

    return (
        <main>
            <div 
                className={`${styles.button} ${disabled ? styles.disabled : ''}`}
                onClick={handleClick}>
                { imageUrl && <img className={`${styles.img} ${rotate ? styles.rotated : ''}`} src={imageUrl}/> }
                { text && <label>{text}</label> }
            </div>
        </main>
    )
}