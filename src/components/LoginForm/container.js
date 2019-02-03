import React from 'react';
import LoginForm from './presenter'

class Container extends React.Component {
  state = {
    username: '',
    pwd: '',
  };
  _handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value})
  };
  _handleSubmit = (e) => {
    e.preventDefault();
    const {username, pwd} = this.state;
    console.log(username, pwd)
    // need redux action
  };

  render() {
    const {username, pwd} = this.state;
    return (
      <LoginForm
        usernameValue={username}
        pwdValue={pwd}
        handleChange={this._handleChange}
        handleSubmit={this._handleSubmit}
      />
    )
  }
}

export default Container;