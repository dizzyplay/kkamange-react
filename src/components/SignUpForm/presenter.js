import React from "react";
import PropTypes from 'prop-types';
import formStyles from 'shared/formStyles.scss';

const SignUpForm = (props, context) => {
  return (
    <div className={formStyles.formComponent}>
      <form className={formStyles.form}>
        <input className={formStyles.textInput} type={'email'} placeholder={context.t('Email')}/>
        <input className={formStyles.textInput} type={'text'} placeholder={context.t('Full Name')}/>
        <input className={formStyles.textInput} type={'username'} placeholder={context.t('Username')}/>
        <input className={formStyles.textInput} type={'password'} placeholder={context.t('Password')}/>
        <input className={formStyles.brownButton} type={'submit'} value={context.t('Sign up')}/>
      </form>
      <span className={formStyles.divider}> or </span>
      <button className={formStyles.greenButton}>
        {context.t('Login with NAVER')}
      </button>
    </div>
  )
};
SignUpForm.contextTypes ={
  t:PropTypes.func.isRequired,
};

export default SignUpForm;