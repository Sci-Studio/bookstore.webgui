import { useState } from 'react';
import styles from './InputField.module.css'

export interface IInputFieldProps { 
    text?: string | null,
    imageUrl?: string | null,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
 }

export default function InputField({ text = null, imageUrl = null, placeholder = '', onChange, className = '' }: IInputFieldProps) {
    const [value, setValue] = useState('')
    
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    }
    return (
        <main>
            <div className={`${styles.container} ${className || ''}`}>
                <div className={styles.header}>
                    { imageUrl && <img className={styles.img} src={imageUrl}/> }
                    { text && <label className={styles.label}>{text}</label> }
                </div>
                <div>
                    <input className={styles.input} placeholder={placeholder} value={value} onChange={ e => onValueChange(e)} required />
                </div>
            </div>
        </main>
    )
}