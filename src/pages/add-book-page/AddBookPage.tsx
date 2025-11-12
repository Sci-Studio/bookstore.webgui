import styles from './AddBookPage.module.css'

export default function AddBookPage() {

    return (
        <main className={styles.main}>
            <div className={styles.addBookSection}>
                <label className={styles.addBookLabel}>Add New Book</label>
                <label className={styles.addBookSubtitle}>Expand your digital library by adding a new book with all the essential details and cover image</label>
            </div>
            <div className={styles.bookForm}>
                <form className={styles.formContainer}>
                    <div className={styles.bookParameter}></div>
                    <div className={styles.bookImage}></div>
                    <div className={styles.formControls}></div>
                </form>
            </div>
            <div className={styles.recentBooks}></div>
        </main>
    )

}