import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './presenter'

class Container extends React.Component {
  static contextTypes = {
    t: PropTypes.func.isRequired,
  };
  state = {
    email: '',
    username: '',
    pwd1: '',
    pwd2: '',
  };
  _handleInputChange = e => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  };
  _handleSubmit = e => {
    e.preventDefault();
    const {pwd1, pwd2} = this.state;
    if (pwd1 !== pwd2) {
      return (
        alert(this.context.t('The password is different'))
      )
    }
    //need to redux action
  };

  render() {
    const {email, username, pwd1, pwd2} = this.state;
    return (
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