import React from 'react';
import LoginForm from "components/LoginForm";
import styles from 'App.module.scss'

class App extends React.Component {

  render() {
    return (
      <div className={styles.main}>
        <LoginForm/>
      </div>
    )
  }
}

export default App;