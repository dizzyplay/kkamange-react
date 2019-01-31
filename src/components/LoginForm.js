import React from 'react'

export default class LoginForm extends React.Component{
  handleSubmit=(e)=>{
    e.preventDefault();
  };
  handleChange=(e)=>{
  };
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        ID <input name={'id'} onChange={this.handleChange}/>
        PASSWORD <input type={'password'} name={'pwd'} onChange={this.handleChange}/>
        <input type={'submit'}/>
      </form>
    )
  }
}