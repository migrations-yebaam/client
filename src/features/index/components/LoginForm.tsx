import React, { useState } from 'react';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import ForgotPasswordLink from './ForgotPasswordLink';
import '../scss/LoginForm.scss';

import { updateHeader } from '../../../shared/header/reducers/header.reducer';
import { saveToSessionStorage } from '../../../shared/utils/utils.service';
import { IResponse } from '../../../shared/shared.interface';
import { useAppDispatch } from '../../../store/store';
import { useAuthSchema } from '../../auth/hooks/useAuthSchema';
import { ISignInPayload } from '../../auth/interfaces/auth.interface';
import { addAuthUser } from '../../auth/reducers/auth.reducer';
import { updateLogout } from '../../auth/reducers/logout.reducer';
import { loginUserSchema } from '../../auth/schemes/auth.schema';
import { useSignInMutation } from '../../auth/services/auth.service';

const LoginForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState<ISignInPayload>({
    username: 'jimmy',
    password: 'dym123',
  });
  const [alertMessage, setAlertMessage] = useState<string>('');
  const dispatch = useAppDispatch();
  const [signIn] = useSignInMutation();
  const [schemaValidation] = useAuthSchema({ schema: loginUserSchema, userInfo });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onLoginUser = async (): Promise<void> => {
    try {
      const isValid: boolean = await schemaValidation();
      if (isValid) {
        const result: IResponse = await signIn(userInfo).unwrap();
        setAlertMessage('');
        dispatch(addAuthUser({ authInfo: result.user }));
        dispatch(updateLogout(false));
        dispatch(updateHeader('home'));
        saveToSessionStorage(JSON.stringify(true), JSON.stringify(result.user?.username));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="login-form">
      <LoginInput value={userInfo.username} onChange={handleInputChange} />
      <PasswordInput value={userInfo.password} onChange={handleInputChange} />
      <LoginButton onClick={onLoginUser} />
      <ForgotPasswordLink />
    </form>
  );
};

export default LoginForm;
