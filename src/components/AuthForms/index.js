import React from "react";
import Facebook from 'react-ionicons/lib/LogoFacebook'
import styles from './styles.scss';


const LoginForm = (props) => {
  return (
    <div className={styles.formComponent}>
      <form className={styles.form}>
        <input className={styles.textInput} type={'text'} placeholder={'Username'}/>
        <input className={styles.textInput} type={'password'} placeholder={'Password'}/>
        <input className={styles.brownButton} type={'submit'} value={'Log in'}/>
      </form>
      <span>
      Forgot password?
      </span>
    </div>
  )
};

const SignUpForm = (props) => {
  return (
    <div className={styles.formComponent}>
      <form className={styles.form}>
        <input className={styles.textInput} type={'email'} placeholder={'Email'}/>
        <input className={styles.textInput} type={'text'} placeholder={'Full Name'}/>
        <input className={styles.textInput} type={'username'} placeholder={'Username'}/>
        <input className={styles.textInput} type={'password'} placeholder={'Password'}/>
        <input className={styles.brownButton} type={'submit'} value={'Sign up'}/>
      </form>
      <span className={styles.divider}> or </span>
      <button className={styles.greenButton}>
        <Facebook fontSize={'20px'} color={'white'}/>
        Login with NAVER
      </button>
    </div>
  )
}

export {LoginForm, SignUpForm}