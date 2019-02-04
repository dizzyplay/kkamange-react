import React from "react";
import PropTypes from 'prop-types';
import formStyles from 'shared/formStyles.scss';

const SignUpForm = (props, context) => {
  const { emailValue, usernameValue, pwd1Value, pwd2Value} = props;
  return (
    <div className={formStyles.formComponent}>
      <form className={formStyles.form}>
        <input onChange={props.handleInputChange}
               className={formStyles.textInput}
               value={emailValue}
               type={'text'}
               name={'email'}
               placeholder={context.t('Email')}
        />
        <input onChange={props.handleInputChange}
               className={formStyles.textInput}
               value={usernameValue}
               type={'text'}
               name={'username'}
               placeholder={context.t('Username')}
        />
        <input onChange={props.handleInputChange}
               className={formStyles.textInput}
               value={pwd1Value}
               type={'password'}
               name={'pwd1'}
               placeholder={context.t('Password')}
        />
        <input onChange={props.handleInputChange}
               className={formStyles.textInput}
               value={pwd2Value}
               type={'password'}
               name={'pwd2'}
               placeholder={context.t('Check Password')}
        />
        <input onClick={props.handleSubmit}
               className={formStyles.brownButton}
               type={'submit'} value={context.t('Sign up')}
        />
      </form>

    </div>
  )
};

SignUpForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  pwd1Value: PropTypes.string.isRequired,
  pwd2Value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
SignUpForm.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default SignUpForm;