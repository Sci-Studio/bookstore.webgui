import { useRef, useState } from 'react';
import styles from './DragDropFile.module.css';

export interface IDragDropFileProps {
    label?: string | null,
    labelImageUrl?: string | undefined,
    imageUrl?: string | undefined,
    title?: string | null,
    subTitle?: string | null,
    supportedFormats?: string | null,
    onFile: (file: File) => void
}
export default function DragDropFile(
    { label, labelImageUrl, imageUrl, title, subTitle, supportedFormats, onFile }: IDragDropFileProps
) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [dragOver, setDragOver] = useState(false);

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) onFile(file);
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) onFile(file);
    };

    return (
        <main>
            <div className={`${styles.container} ${dragOver ? styles.dragOver : ""}`}
                 onDragOver={(e) => {
                              e.preventDefault();
                              setDragOver(true);
                            }}
                 onDragLeave={() => setDragOver(false)}
                 onDrop={handleDrop}
                 onClick={() => inputRef.current?.click()}>
                <div className={styles.header}>
                    { labelImageUrl && <img className={styles.img} src={labelImageUrl}/> }
                    { label && <label className={styles.label}>{label}</label> }
                </div>
                <div className={styles.dragDropArea}>
                    <div className={styles.dragDropImage}>
                        { imageUrl && <img className={styles.dragDropImg} src={imageUrl}/> }
                    </div>
                    { title && <span className={styles.title}>{title}</span> }
                    { subTitle && <span className={styles.subTitle}>{subTitle}</span> }
                    { supportedFormats && <span className={styles.supportedFormats}>{supportedFormats}</span> }
                </div>
                <input type="file"
                       ref={inputRef}
                       style={{ display: "none" }}
                       onChange={handleFileSelect}
                />
            </div>
        </main>
    )
}