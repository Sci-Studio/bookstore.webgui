import styles from './ToolBar.module.css';
import SearchBar from '../../widgets/search-bar/SearchBar';

export interface IToolBarProps {
  onSearch: (query: string) => void;
}

export default function ToolBar({ onSearch }: IToolBarProps) {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.toolsContainer}>
                    <div className={styles.searchContainer}>
                        <SearchBar onSearch={(query) => onSearch(query)} />
                    </div>
                    <div className={styles.viewContainer}>

                    </div>
                </div>
            </div>
        </main>
    )
}