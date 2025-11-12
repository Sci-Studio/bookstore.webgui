import styles from './SearchBar.module.css';
import search from '../../assets/svg/search.svg'

interface ISearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search..." }: ISearchBarProps) {

    // const [query, setQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onSearch(value);
    };

    return (
        <main>
            <div className={styles.searchBarContainer}>
                <img className={styles.img} src={search}/>
                <input className={styles.textInput} type="text" placeholder={placeholder} onChange={(e) => handleChange(e)}/>
            </div>
        </main>
    )
}