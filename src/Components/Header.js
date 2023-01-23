import styles from './Header.module.css'
import Logo from '../assets/header/Logo.svg'
import Circeya from '../assets/header/Circeya.svg'
import Vector from '../assets/header/Vector.svg'

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
                <span className={styles.tel}> +7 (495) 495-49-54</span>
                <img src={Vector} alt="Tel" className={styles.vector} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
