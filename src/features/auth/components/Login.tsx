import React, { useState } from 'react';
import '../scss/LoginModal.scss';
import { ISignInPayload } from '../interfaces/auth.interface';
import { useAppDispatch } from '../../../store/store';
import { useNavigate } from 'react-router-dom';
import { useAuthSchema } from '../hooks/useAuthSchema';
import { useSignInMutation } from '../services/auth.service';
import { loginUserSchema } from '../schemes/auth.schema';
import { addAuthUser } from '../reducers/auth.reducer';
import { updateHeader } from '../../../shared/header/reducers/header.reducer';
import { IResponse } from '../../../shared/shared.interface';
import { saveToSessionStorage } from '../../../shared/utils/utils.service';
import { updateLogout } from '../reducers/logout.reducer';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [userInfo, setUserInfo] = useState<ISignInPayload>({
    username: 'Jimmy',
    password: 'dym123',
 
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [schemaValidation] = useAuthSchema({ schema: loginUserSchema, userInfo });
  const [signIn, { isLoading }] = useSignInMutation();


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
        console.log('saveToSessionStorage',result.user)
        console.log('saveToSessionStorage',JSON.stringify(true), JSON.stringify(result.user?.username))
      }
    } catch (error) {
      console.log(error)
      // setAlertMessage(error?.data.message);
    }
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="login-modal__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="login-modal__title">Iniciar sesión </h2>
        <input type="text" placeholder="nombre de usuario" className="login-modal__input" />
        <input type="password" placeholder="Contraseña" className="login-modal__input" />
        <div className="login-modal__remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Recordar contraseña</label>
        </div>
        <button className="login-modal__button">Iniciar sesión</button>
        <a href="#" className="login-modal__forgot">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  );
};

export default LoginModal;
