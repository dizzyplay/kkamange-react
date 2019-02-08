import React from 'react';
import PropTypes from 'prop-types';
import formStyles from 'shared/formStyles.scss';

class NaverLogin extends React.Component {
  state = {
    access_token: '',
  };
  static propTypes = {
    client_id: PropTypes.string.isRequired,
    redirect_url: PropTypes.string.isRequired,
  };
  param = {
    response_type: 'token',
    client_id: this.props.client_id,
    redirect_uri: this.props.redirect_uri,
    state: 'mynaverstate',
  };
  objectToParams = params => '?' + Object.keys(params)
    .map(param => `${param}=${encodeURIComponent(params[param])}`)
    .join('&')
  decodeParams = (paramString, key) => {
    return decodeURIComponent(
      paramString.replace(
        new RegExp(
          '^(?:.*[&\\#]' +
          encodeURIComponent(key).replace(/[.+*]/g, '\\$&') +
          '(?:\\=([^&]*))?)?.*$', 'i'
        ),
        '$1'
      )
    );
  };
  handleClick = () => {
    const request_uri = "https://nid.naver.com/oauth2.0/authorize/" + this.objectToParams(this.param);
    const myWindow = window.open(request_uri, "", "width=400,height=500");
    const timeId = setInterval(() => {
      try {
        const toDecode = myWindow.location.hash;
        const access_token = this.decodeParams(toDecode, 'access_token')
        const state = this.decodeParams(toDecode, 'state')
        if (state !== this.param.state) return (alert('error!'));
        this.setState({
          access_token: access_token
        });
        this.props.handleCallback(this.state.access_token);
        myWindow.close();
        clearInterval(timeId);
      } catch (e) {
        console.log('waiting response...');
      }
    }, 1000)
  };

  render() {
    return (
      <button className={formStyles.dummyButton} onClick={this.handleClick}>
        <img width={'200px'} src={require('images/naver_login.png')} alt={'naver_login'}/>
      </button>
    )
  }
}

export default NaverLogin;