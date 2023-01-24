import styles from './BlockOne.module.css'
import ContentCard from './Card/ContentCard'

const BlockOne = (props) => {
  return (
    <div className={styles.conteiner}>
      <h2>ut aliquip ex ea commodo consequat</h2>
      <div className={styles.content}>
        <div className={styles.contentImg}>
          <img src={props.photo} alt="Julia" />
        </div>
        <ContentCard />
      </div>
    </div>
  )
}

export default BlockOne
