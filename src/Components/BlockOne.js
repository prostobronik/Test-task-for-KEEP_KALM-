import styles from './BlockOne.module.css'
import ContentCard from './card/ContentCard'

const BlockOne = (props) => {
  const { photo } = props
  return (
    <div className={styles.conteiner}>
      <h2 className={styles.conteinerTitle}>
        ut aliquip ex ea commodo consequat
      </h2>
      <div className={styles.content}>
        <div className={styles.contentCards}>
          <img src={photo} className={styles.contentImg} alt="Julia" />
        </div>
        <ContentCard />
      </div>
    </div>
  )
}

export default BlockOne
