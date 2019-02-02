import React from 'react'
import styles from "./styles.scss";

const Auth = (props, context)=>(
  <form className={styles.form}>
    id <input name={'id'}/>
    password <input type={'password'} name={'pwd'}/>
    <input type={'submit'}/>
  </form>
);

export default Auth;