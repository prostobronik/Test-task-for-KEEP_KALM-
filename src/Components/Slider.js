import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import photoSlider from './SliderImg'
import styles from './Slider.module.css'

const ScrollingHorizontally = () => {
  return (
    <>
      <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
      <div style={{ height: `489px` }}>
        <HorizontalScroll reverseScroll={true}>
          {photoSlider.map((photo) => (
            <div className={styles.cardImg}>
              <img
                className={styles.img}
                src={photo}
                alt="Слайдер"
                key={photo}
              />
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </>
  )
}

export default ScrollingHorizontally
