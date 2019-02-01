import React from 'react';
import LoginForm from "components/LoginForm";
import './styles.scss'

class App extends React.Component {

  render() {
    return (
      <div className={'main'}>
        <LoginForm/>
      </div>
    )
  }
}

export default App;