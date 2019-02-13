import React from 'react';
import styles from './styles.scss';

const FeedPhoto = (props)=>{
  return(
    <div className={styles.feedPhoto}>
      <img
        className={styles.image}
        src={props.photo}
        alt={props.title}
      />
      <div className={styles.comments}>
        <span>{props.title}</span>
        <span>{props.content}</span>
        <span>{props.short_date}</span>
        {props.comment_count}
      </div>
    </div>
  )
}

export default FeedPhoto;

