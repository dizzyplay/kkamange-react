import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './presenter'

class Container extends React.Component {
  state = {
    username: '',
    password: '',
  };
  static propTypes = {
    naverLogin: PropTypes.func.isRequired,
    usernameLogin: PropTypes.func.isRequired,
  };
  _handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value})
  };
  _handleSubmit = (e) => {
    e.preventDefault();
    const {usernameLogin} = this.props;
    const {username, password} = this.state;
    console.log(username, password)
    usernameLogin(username,password);

    // need redux action
  };
  _handleNaverLogin = (token)=>{
    const {naverLogin} = this.props;
    naverLogin(token)
  };

  render() {
    const {username, password} = this.state;
    return (
      <LoginForm
        usernameValue={username}
        pwdValue={password}
        handleChange={this._handleChange}
        handleSubmit={this._handleSubmit}
        handleNaverLogin={this._handleNaverLogin}
      />
    )
  }
}

export default Container;