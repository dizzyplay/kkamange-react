import React from 'react';
import SignUpForm from './presenter'

class Container extends React.Component{
  state={
    email:'',
    username:'',
    pwd1:'',
    pwd2:'',
  };
  _handleInputChange = e=>{
    const {value,name} = e.target;
    this.setState({[name]:value});
    console.log(value, name)
  };
  _handleSubmit = e =>{
    e.preventDefault();
    console.log(this.state)
    //need to redux action
  }
  render(){
    const {email, username, pwd1, pwd2} = this.state;
    return(
      <SignUpForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        emailValue={email}
        usernameValue={username}
        pwd1Value={pwd1}
        pwd2Value={pwd2}
      />
    )
  }
}

export default Container;