import React from 'react';
import LoginForm from "components/LoginForm";
import styles from 'App.module.scss'

import {Provider} from 'react-redux';
import store from 'redux/configureStore'

class App extends React.Component{
  test = ()=>{
  }
  render(){
    return (
      <Provider store={store}>
        <div className={styles.main}>
          <LoginForm onSubmit={this.test}/>
        </div>
      </Provider>
    )
  }
}

export default App;