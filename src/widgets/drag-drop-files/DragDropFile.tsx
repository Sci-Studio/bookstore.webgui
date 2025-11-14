import styles from './DragDropFile.module.css';

export interface IDragDropFileProps {
    label?: string | null,
    labelImageUrl?: string | undefined,
    imageUrl?: string | undefined,
    title?: string | null,
    subTitle?: string | null,
    supportedFormats?: string | null,
}
export default function DragDropFile(
    { label, labelImageUrl, imageUrl, title, subTitle, supportedFormats }: IDragDropFileProps
) {
    return (
        <main>
            <div className={styles.container}>
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
            </div>
        </main>
    )
}