import React from 'react';
import LoginForm from "components/LoginForm";
import Footer from "components/Footer";
import styles from './styles.scss'

class App extends React.Component {

  render() {
    return (
      <div className={styles.App}>
        <LoginForm/>
        <Footer/>
      </div>
    )
  }
}

export default App;