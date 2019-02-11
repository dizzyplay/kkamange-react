import React from 'react'
import styles from './styles.scss'

const PhotoDisplay = props =>(
  <div className={styles.photoDisplay}>
    <img
      width={'300'}
      src={props.photo}
    />
  </div>
);

export default PhotoDisplay;
