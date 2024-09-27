import React from 'react';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import ForgotPasswordLink from './ForgotPasswordLink';
import '../scss/LoginForm.scss';

const LoginForm: React.FC = () => {
  return (
    <form className="login-form">
      <LoginInput />
      <PasswordInput />
      <LoginButton />
      <ForgotPasswordLink />
    </form>
  );
};

export default LoginForm;
