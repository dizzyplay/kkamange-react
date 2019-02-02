import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from 'components/Footer'
import LoginForm from 'components/LoginForm'
import styles from './styles.scss'

class App extends React.Component {
  render() {
    const {isLoggedIn} = this.props;
    return (
      <div className={styles.App}>
        {isLoggedIn ? <PrivateRoutes/> : <PublicRoutes/>}
        <Footer/>
      </div>
    )
  }
}

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => "login status"}/>
      <Route path={'/profile'} render={() => "profile status"}/>
    </Switch>
  )
};

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={LoginForm}/>
    </Switch>
  )
}

export default App;