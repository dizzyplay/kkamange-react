import React from "react";
import PropTypes from 'prop-types';
import formStyles from 'shared/formStyles.scss'

const LoginForm = (props, context) => {
  return (
    <div className={formStyles.formComponent}>
      <form className={formStyles.form}>
        <input
          className={formStyles.textInput}
          type={'text'}
          onChange={props.handleChange}
          value={props.usernameValue}
          name="username"
          placeholder={context.t("username")}
        />
        <input
          className={formStyles.textInput}
          type={'password'}
          onChange={props.handleChange}
          value={props.pwdValue}
          name={"pwd"}
          placeholder={context.t("Password")}/>
        <input className={formStyles.brownButton} type={'submit'} value={context.t("Log in")}/>
      </form>
      <span>
        {context.t("Forgot password?")}
      </span>
    </div>
  )
};
LoginForm.propTypes ={
  usernameValue: PropTypes.string.isRequired,
  pwdValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
LoginForm.contextTypes ={
  t:PropTypes.func.isRequired,
};

export default LoginForm;