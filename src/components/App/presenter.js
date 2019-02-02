import React from 'react';
import Footer from 'components/Footer'
import styles from './styles.scss'

class App extends React.Component{
  render(){
    return(
      <div className={styles.App}>
        <Footer/>
      </div>
    )
  }
}

export default App;