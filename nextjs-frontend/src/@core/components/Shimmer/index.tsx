// ** React Imports
import React from 'react'

// ** Styles Imports
import styles from './styles.module.css'

function Shimmer({ borderRadius = '8px', height = '100px', width = '100px', containerStyle = {} }) {
  return (
    <div style={{ borderRadius, height, width, ...containerStyle }} className={styles.shimmerWrapper}>
      <div className={styles.shimmerAnimation}></div>
    </div>
  )
}

export default Shimmer
