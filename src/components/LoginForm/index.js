import React from 'react'
import styles from './styles.scss'

export default class LoginForm extends React.Component{
  handleSubmit=(e)=>{
    e.preventDefault();
  };
  handleChange=(e)=>{
  };
  render(){
    return(
      <form onSubmit={this.handleSubmit} className={styles.form}>
        id <input name={'id'} onChange={this.handleChange}/>
        password <input type={'password'} name={'pwd'} onChange={this.handleChange}/>
        <input type={'submit'}/>
      </form>
    )
  }
}