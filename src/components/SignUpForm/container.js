import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './presenter'

class Container extends React.Component {
  static contextTypes = {
    t: PropTypes.func.isRequired,
  };
  static propTypes = {
    userSignup: PropTypes.func.isRequired,
  };
  state = {
    email: '',
    username: '',
    nickname:'',
    password1: '',
    password2: '',
  };
  _handleInputChange = e => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  };
  _handleSubmit = e => {
    e.preventDefault();
    const {email, username, nickname, password1, password2} = this.state;
    const {userSignup} = this.props;
    if (password1 !== password2) {
      return (
        alert(this.context.t('The password is different'))
      )
    }
    //need to redux action
    console.log(email,username,nickname,password1,password2)
    userSignup(this.state)
  };

  render() {
    const {email,nickname, username, password1, password2} = this.state;
    return (
      <SignUpForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        emailValue={email}
        usernameValue={username}
        nicknameValue={nickname}
        pwd1Value={password1}
        pwd2Value={password2}
      />
    )
  }
}

export default Container;