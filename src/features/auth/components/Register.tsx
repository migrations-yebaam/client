import React, { useState, useEffect } from 'react';
import '../scss/RegisterModal.scss';
import { ISignUpPayload } from '../interfaces/auth.interface';
import { useAppDispatch } from '../../../store/store';
import { useAuthSchema } from '../hooks/useAuthSchema';
import { registerUserSchema } from '../schemes/auth.schema';
import { useSignUpMutation } from '../services/auth.service';
import { updateHeader } from '../../../shared/header/reducers/header.reducer';
import { IResponse } from '../../../shared/shared.interface';
import { saveToSessionStorage } from '../../../shared/utils/utils.service';
import { addAuthUser } from '../reducers/auth.reducer';
import { updateLogout } from '../reducers/logout.reducer';

interface RegisterModalProps {
  onClose: () => void;
}

// Función para generar un color aleatorio
const getRandomColor = (): string => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [profileImage, setProfileImage] = useState<string>(''); // Para almacenar la imagen en base64
  const [avatarColor, setAvatarColor] = useState<string>('blue'); // Color del avatar
  const [userInfo, setUserInfo] = useState<ISignUpPayload>({
    username: 'santamaria',
    password: 'dym123',
    email: 'santamaria@test.com',
    avatarColor: avatarColor, // Color del avatar
    avatarImage: '', // Imagen en base64
  });

  const dispatch = useAppDispatch();
  const [schemaValidation] = useAuthSchema({ schema: registerUserSchema, userInfo });
  const [signUp, { isLoading }] = useSignUpMutation();

  // Actualizar el estado de los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'username') {
      // Generar un color aleatorio basado en el nombre del usuario
      const randomColor = getRandomColor();
      setAvatarColor(randomColor); // Actualizar el color del avatar
      setUserInfo({ ...userInfo, [name]: value, avatarColor: randomColor });
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  // Manejar la selección de la imagen (convertir a base64) y previsualizarla
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string); // Guardamos la imagen en base64
        setUserInfo({ ...userInfo, avatarImage: reader.result as string }); // Actualizamos el estado de avatarImage
      };
      reader.readAsDataURL(file);
    }
  };

  const onRegisterUser = async (): Promise<void> => {
    try {
      const isValid: boolean = await schemaValidation();
      if (isValid) {
        const result: IResponse = await signUp(userInfo).unwrap();
        setAlertMessage('');
        dispatch(addAuthUser({ authInfo: result.user }));
        dispatch(updateLogout(false));
        dispatch(updateHeader('home'));
        saveToSessionStorage(JSON.stringify(true), JSON.stringify(result.user?.username));
      }
    } catch (error) {
      console.log(error);
      setAlertMessage('Hubo un problema con el registro, por favor inténtalo de nuevo.');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onRegisterUser();
  };

  return (
    <div className="register-modal-overlay">
      <div className="register-modal">
        <button className="register-modal__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="register-modal__title">Registrarte</h2>
        <p className="register-modal__subtitle">Es rápido y fácil.</p>

        {/* Formulario de registro */}
        <form onSubmit={handleSubmit} className="register-modal__inputs">
          <div className="register-modal__name-inputs-entitie">
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              placeholder="Nombre"
              className={`register-modal__input`}
              required
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              placeholder="Correo electrónico"
              className="register-modal__input"
              required
            />
          </div>

          <input
            type={passwordType}
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
            placeholder="Contraseña"
            className="register-modal__input"
            required
          />

          {/* Subida de imagen para el avatar y previsualización */}
          <div className="register-modal__file-upload">
            <label htmlFor="avatarImage">Subir imagen de avatar</label>
            <input type="file" id="avatarImage" onChange={handleImageChange} />
          </div>
          {profileImage && (
            <div className="register-modal__avatar-preview">
              <img src={profileImage} alt="Avatar Preview" className="avatar-preview" />
            </div>
          )}

          {/* Color del avatar (mostrando el color generado automáticamente) */}
          <div className="register-modal__avatar-color">
            <label htmlFor="avatarColor">Color del avatar generado:</label>
            <input
              type="color"
              id="avatarColor"
              name="avatarColor"
              value={avatarColor}
              readOnly
              style={{ cursor: 'not-allowed' }}
            />
          </div>

          {/* Mostrar/ocultar contraseña */}
          <div className="register-modal__show-password">
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  setPasswordType(passwordType === 'password' ? 'text' : 'password')
                }
              />{' '}
              Mostrar contraseña
            </label>
          </div>

          {alertMessage && <p className="register-modal__alert">{alertMessage}</p>}

          <button type="submit" className="register-modal__submit">
            {isLoading ? 'Registrando...' : 'Registrarte'}
          </button>
        </form>

        {/* Términos y condiciones */}
        <p className="register-modal__terms">
          Al hacer clic en "Registrarte", aceptas nuestras
          <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">
            Condiciones
          </a>
          , la{' '}
          <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
            Política de privacidad
          </a>
          y la Política de cookies.
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
