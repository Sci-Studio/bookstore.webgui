import styles from './FooterNavigator.module.css'
import FooterButton from '../../widgets/footer-button/FooterButton'
import leftArrow from '../../assets/svg/left_arrow.svg';

export default function FooterNavigation() {

    return (
        <main className={styles.container}>
            <FooterButton imageUrl={leftArrow}></FooterButton>
            <FooterButton imageUrl={leftArrow} rotate></FooterButton>
        </main>
    )
}