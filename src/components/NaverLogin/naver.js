import React from 'react'
import formStyles from 'shared/formStyles.scss'

class NaverLogin extends React.Component {
  state = {
    access_token: '',
  };
  param = {
    response_type: 'token',
    client_id: 't8XOFusguQbsx30UsAnl',
    redirect_uri: 'http://localhost:3000/callback/',
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
    const url = "https://nid.naver.com/oauth2.0/authorize/" + this.objectToParams(this.param);
    const myWindow = window.open(url, "", "width=400,height=500");
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