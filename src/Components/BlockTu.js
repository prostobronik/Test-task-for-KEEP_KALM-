import styles from './BlockTu.module.css'
import ContentCard from './card/ContentCard'

const BlockTu = (props) => {
  const { photo } = props
  return (
    <div className={styles.content}>
      <ContentCard />
      <div className={styles.contentCard}>
        <img src={photo} className={styles.contentImg} alt="Julia" />
      </div>
    </div>
  )
}

export default BlockTu
