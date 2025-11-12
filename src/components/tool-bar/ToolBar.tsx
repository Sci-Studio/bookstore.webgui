import styles from './ToolBar.module.css';

export default function ToolBar() {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.toolsContainer}>
                    <div className={styles.searchContainer}>

                    </div>
                    <div className={styles.viewContainer}>

                    </div>
                </div>
            </div>
        </main>
    )
}