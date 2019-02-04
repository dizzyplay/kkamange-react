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
  _handleNaverLogin = ()=>{
    console.log('naver');
    const token='AAAAOWClyj16AG797DHnNmbdX0GJ8WBqFsRtnOmSt0U0PH3QVXOgoAow9NXuV1OWTI4QvL1o6Wzv6A8Q4G2FKzrlysM=';
    console.log(token)
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