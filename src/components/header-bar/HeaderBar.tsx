import styles from './HeaderBar.module.css';
import { NavLink } from 'react-router-dom'
import myLogo from '../../assets/svg/logo.svg';

interface INavigationItem {
    name: string;
    link: string;
}

export default function HeaderBar() {

    const navigationList: Array<INavigationItem> = [
        { name: 'Dashboard', link: '/' },
        { name: 'Add Book', link: '/books/new' }
    ];

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.main}>
                    <div className={styles.logo}>
                        <div className={styles.ImageContainer}>
                            <img className={styles.logoImage} src={myLogo} alt="Logo"/>
                        </div>
                        <span style={{width: '12px'}}></span>
                        <h1 className={styles.logoLabel}>BookLibrary</h1>
                    </div>
                    <div className={styles.navigation}>
                        {navigationList.map((navItem, idx) => (
                            <div key={idx} className={styles.navContainer}>
                                <NavLink 
                                    to={navItem.link} 
                                    className={({ isActive }) => isActive ? styles.activeLink : ''}>
                                        {navItem.name}
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header> 
    )
}