import React from 'react';
import SignUpForm from './presenter'

class Container extends React.Component{
  state={
    email:'',
    username:'',
    
  }
  _handleInputChange = e=>{
  }
  render(){
    return(
      <SignUpForm
      />
    )
  }
}

export default Container;