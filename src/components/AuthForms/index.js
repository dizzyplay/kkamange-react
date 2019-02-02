import React from "react";
import styles from "./styles.scss";

const LoginForm = (props) => {
  return (
    <div>
      <form>
        <input type={'text'} placeholder={'Username'}/>
        <input type={'password'} placeholder={'Password'}/>
        <input type={'submit'} value={'Log in'}/>
      </form>
      <span>or</span>
      <span>Log in with Facebook</span>
      <span>Forgot password?</span>
    </div>
  )
};

const SignUpForm = (props) => {
  return (
    <div>
      <form>
        <input type={'email'} placeholder={'Email'}/>
        <input type={'text'} placeholder={'Full Name'}/>
        <input type={'username'} placeholder={'Username'}/>
        <input type={'password'} placeholder={'Password'}/>
        <input type={'submit'} value={'Sign up'}/>
      </form>
    </div>
  )
}

export {LoginForm, SignUpForm}