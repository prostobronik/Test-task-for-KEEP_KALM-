import styles from './Header.module.css'
import Logo from '../assets/header/Logo.svg'
import Circeya from '../assets/header/Circeya.svg'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <div>
          <img className={styles.logo} src={Logo} alt="Logo" />
          <img src={Circeya} alt="Circeya" />
        </div>
        <div>
          <ul className={styles.navUl}>
            <li>
              <a className={styles.navMobile} href="tel:+74954954954">
                +7 (495) 495-49-54
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
