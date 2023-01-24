import styles from './ContentCard.module.css'

const ContentCard = () => {
  return (
    <div className={styles.contentCard}>
      <h3 className={styles.contentTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h3>
      <p className={styles.contentText}>
        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint
        occaecatcupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laboru
      </p>
    </div>
  )
}

export default ContentCard
