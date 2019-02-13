import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import Footer from 'components/Footer'
import Auth from 'components/Auth'
import Feed from 'components/Feed';
import Navi from 'components/Navigation';
import './styles.scss'

const App = props => [
  <Navi/>,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2}/>,
    <Footer key={3}/>
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Feed}/>
      <Route path={'/profile'} render={() => "profile status"}/>
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