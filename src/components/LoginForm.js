import React from 'react'

export default class LoginForm extends React.Component{
  handleSubmit=(e)=>{
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        ID <input/>
        PASSWORD <input/>
        <input type={'submit'}/>
      </form>
    )
  }
}