import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './presenter'

class Container extends React.Component {
  state = {
    username: '',
    pwd: '',
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
    const {username, pwd} = this.state;
    console.log(username, pwd)
    usernameLogin(username,pwd);

    // need redux action
  };
  _handleNaverLogin = (token)=>{
    const {naverLogin} = this.props;
    naverLogin(token)
  };

  render() {
    const {username, pwd} = this.state;
    return (
      <LoginForm
        usernameValue={username}
        pwdValue={pwd}
        handleChange={this._handleChange}
        handleSubmit={this._handleSubmit}
        handleNaverLogin={this._handleNaverLogin}
      />
    )
  }
}

export default Container;