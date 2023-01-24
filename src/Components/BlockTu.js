import styles from './BlockTu.module.css'
import ContentCard from './Card/ContentCard'

const BlockTu = (props) => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.content}>
        <ContentCard />
        <div className={styles.contentImg}>
          <img src={props.photo} alt="Julia" />
        </div>
      </div>
    </div>
  )
}

export default BlockTu
