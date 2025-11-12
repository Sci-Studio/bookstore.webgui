import styles from './PushButton.module.css';

export interface IPushButtonProps {
    text?: string | null,
    imageUrl?: string | undefined,
    onClick?: () => void;
    className?: string;
}

export default function PushButton({ text, imageUrl, onClick, className }: IPushButtonProps) {
    return (
        <main>
            <div className={`${styles.button} ${className || ''}`} onClick={onClick}>
                <img className={styles.img} src={imageUrl}/>
                {text && <label>{text}</label>}
            </div>
        </main>
    )
}
