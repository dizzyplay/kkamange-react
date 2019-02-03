import React from "react";
import PropTypes from 'prop-types';
import Facebook from 'react-ionicons/lib/LogoFacebook'
import styles from './styles.scss';



const LoginForm = (props, context) => {
  return (
    <div className={styles.formComponent}>
      <form className={styles.form}>
        <input className={styles.textInput} type={'text'} placeholder={context.t("Username")}/>
        <input className={styles.textInput} type={'password'} placeholder={context.t("Password")}/>
        <input className={styles.brownButton} type={'submit'} value={context.t("Log in")}/>
      </form>
      <span>
        {context.t("Forgot password?")}
      </span>
    </div>
  )
};
LoginForm.contextTypes ={
  t:PropTypes.func.isRequired,
};
const SignUpForm = (props, context) => {
  return (
    <div className={styles.formComponent}>
      <form className={styles.form}>
        <input className={styles.textInput} type={'email'} placeholder={context.t('Email')}/>
        <input className={styles.textInput} type={'text'} placeholder={context.t('Full Name')}/>
        <input className={styles.textInput} type={'username'} placeholder={context.t('Username')}/>
        <input className={styles.textInput} type={'password'} placeholder={context.t('Password')}/>
        <input className={styles.brownButton} type={'submit'} value={context.t('Sign up')}/>
      </form>
      <span className={styles.divider}> or </span>
      <button className={styles.greenButton}>
        <Facebook fontSize={'20px'} color={'white'}/>
        {context.t('Login with NAVER')}
      </button>
    </div>
  )
}
SignUpForm.contextTypes ={
  t:PropTypes.func.isRequired,
};

export {LoginForm, SignUpForm}