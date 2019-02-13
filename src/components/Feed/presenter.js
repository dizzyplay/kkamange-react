import React from 'react';
import PropTypes from 'prop-types';
import FeedPhoto from 'components/FeedPhoto';
import styles from './styles.scss'

const Feed = props=>{
  // 렌더링이 여러번 일어나는 이유 찾아보기
  if(props.loading) {
    return <LoadingFeed/>;
  }else if (props.feed){
    return(
      <div className={styles.feed}>
        {props.feed.map(photo=>
        <FeedPhoto {...photo} key={photo.id}/>
      )}
      </div>
    )
  }
};
const LoadingFeed = () =>(
  <div>
    Loading...
  </div>
);
Feed.propTypes = {
  feed: PropTypes.array
}

export default Feed;