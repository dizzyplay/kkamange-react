import React from 'react'
import PropTypes from 'prop-types';
import styles from "./styles.scss";
import LoginForm from "components/LoginForm"
import SignUpForm from "components/SignUpForm"

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
              <span className={styles.changeLink} onClick={props.changeAction}>
                {context.t('Sign up')}
              </span>
            </p>
          ) :
          (
            <p>
              {context.t('You have account already?')}
              <span className={styles.changeLink} onClick={props.changeAction}>
                  {context.t('Login')}
              </span>
            </p>
          )
        }
      </div>
    </div>
  </div>
);

Auth.contextTypes = {
  t:PropTypes.func.isRequired,
};

export default Auth;