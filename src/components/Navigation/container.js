import React from 'react';
import {Navigation} from "./presenter";

class Container extends React.Component{
  _handleLogout=()=>{
    const {logout}= this.props;
    logout();
  };
  render(){
    return(
      <Navigation handleLogout={this._handleLogout}/>
    )
  }
}

export default Container