import React from 'react';
import LoginForm from './presenter'

class Container extends React.Component{
  state={
    username:'',
    pwd:'',
  };
  _handleChange=(e)=>{
    const {value, name} = e.target;
    this.setState({[name]:value})
  };
  render(){
    const {username, pwd} = this.state;
    return(
      <LoginForm
        usernameValue={username}
        pwdValue={pwd}
        handleChange={this._handleChange}
      />
    )
  }
}

export default Container;