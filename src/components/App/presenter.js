import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import Footer from 'components/Footer'
import Auth from 'components/Auth'
import './styles.scss'

const App = props => [
  props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoutes key={2}/>,
    <Footer key={3}/>
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route key={'1'} exact path={'/'} render={() => "login status"}/>
      <Route key={'2'} path={'/profile'} render={() => "profile status"}/>
    </Switch>
  )
};

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Auth}/>
    </Switch>
  )
};

export default App;