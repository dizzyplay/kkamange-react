import React from 'react'
import styles from "./styles.scss";
import {LoginForm, SignUpForm} from 'components/AuthForms'

const Auth = (props, context) => (
  <div className={styles.auth}>
    <div className={styles.row}>
      <div className={styles.imgBox}>
        <img src={require("images/kkamange.png")} alt={'kkamange'}/>
      </div>
      <div className={`${styles.whiteBox} ${styles.form}`}>
        {props.action==='login' ?
          <LoginForm/> :
          <SignUpForm/>
        }
      </div>
      <div className={styles.whiteBox}>
        {props.action === 'login' ?
          (
            <p>
              <span className={styles.changeLink} onClick={props.changeAction}>Sign up</span>
            </p>
          ) :
          (
            <p>
              You have account already?
              <span className={styles.changeLink} onClick={props.changeAction}>Login</span>
            </p>
          )
        }
      </div>
    </div>
  </div>
);


export default Auth;