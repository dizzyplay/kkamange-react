import React from 'react';
import {UserInfo} from './presenter';

class Container extends React.Component{
  componentDidMount(){
    if(!this.props.username){
      this.props.getUserInformation();
    }
  }
  render(){
    const {username} =this.props;
    return(
      <UserInfo username={username}/>
    )
  }
}

export default Container;
