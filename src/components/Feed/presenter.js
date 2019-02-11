import React from 'react';
import PropTypes from 'prop-types';
import PhotoDisplay from 'components/PhotoDisplay';

const Feed = props=>{
  // 렌더링이 여러번 일어나는 이유 찾아보기
  if(props.loading) {
    return <LoadingFeed/>;
  }else if (props.feed){
    return(
      <div>{props.feed.map(item=>
        <PhotoDisplay img={item.photo} key={item.id}/>
      )}</div>
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