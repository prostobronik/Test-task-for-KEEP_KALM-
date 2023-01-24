import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import photoSlider from './SliderImg'
import styles from './Slider.module.css'

const ScrollingHorizontally = () => {
  return (
    <div className={styles.slider}>
      <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
      <div className={styles.slaiderBlock}>
        <HorizontalScroll
          reverseScroll={true}
          className={styles.scrollHorizontal}
        >
          {photoSlider.map((photo, index) => (
            <div className={styles.cardImg} key={index}>
              <img className={styles.img} src={photo} alt="Слайдер" />
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </div>
  )
}

export default ScrollingHorizontally
