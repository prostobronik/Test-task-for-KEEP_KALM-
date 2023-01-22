import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <div className="">
        <div className={styles.container}>
          © TEST,1022 - {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
