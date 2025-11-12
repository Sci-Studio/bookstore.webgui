import styles from './ToolBar.module.css';
import SearchBar from '../../widgets/search-bar/SearchBar';

export default function ToolBar() {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.toolsContainer}>
                    <div className={styles.searchContainer}>
                        <SearchBar onSearch={(query) => console.log(query)} />
                    </div>
                    <div className={styles.viewContainer}>

                    </div>
                </div>
            </div>
        </main>
    )
}