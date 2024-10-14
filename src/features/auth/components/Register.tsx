import React, { useState } from 'react';
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
    firstName: 'Flower',
    lastName: 'Doe',
    email: 'santamaria@test.com',
    password: 'dym123',
    gender: 'Male', 
    dateOfBirth: new Date('1990-01-01'),
    profilePicture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0gAAAMyAQMAAABtkHM/AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAAFiS0dEAf8CLd4AAABrSURBVBgZ7cGBAAAAAMOg+1NP4AjVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjgBSwwABwrL8wAAAAABJRU5ErkJggg==', 
    avatarColor: avatarColor, 
  });

  const dispatch = useAppDispatch();
  const [schemaValidation] = useAuthSchema({ schema: registerUserSchema, userInfo });
  const [signUp, { isLoading }] = useSignUpMutation();

  // Actualizar handleInputChange para manejar tanto inputs como selects
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Manejar la selección de la imagen (convertir a base64) y previsualizarla
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string); // Guardamos la imagen en base64
        setUserInfo({ ...userInfo, profilePicture: reader.result as string }); // Actualizamos el estado de profilePicture
      };
      reader.readAsDataURL(file);
    }
  };

  const onRegisterUser = async (): Promise<void> => {
    try {
      console.log('Iniciando registro de usuario...');
      
      const isValid: boolean = await schemaValidation();
      if (!isValid) {
        console.log('Datos de userInfo:', userInfo); // Ver los datos antes de validación
        console.log('Errores de validación:', schemaValidation); // Mostrar errores específicos
        setAlertMessage('La validación falló. Por favor, revisa los datos.');
        return; // No continuar si la validación falla
      }

      console.log('Datos antes de enviar al backend:', userInfo);
      
      const result: IResponse = await signUp(userInfo).unwrap();
      
      console.log('Respuesta del backend:', result);
      setAlertMessage('');
      dispatch(addAuthUser({ authInfo: result.user }));
      dispatch(updateLogout(false));
      dispatch(updateHeader('home'));
      saveToSessionStorage(JSON.stringify(true), JSON.stringify(result.user?.username));

    } catch (error) {
      console.log('Error en el registro:', error);
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
  
          {/* Campos para First Name y Last Name */}
          <div className="register-modal__name-inputs-entitie">
            <input
              type="text"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleInputChange}
              placeholder="Nombre"
              className={`register-modal__input`}
              required
            />
            <input
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleInputChange}
              placeholder="Apellido"
              className="register-modal__input"
              required
            />
          </div>
  
          {/* Email */}
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            placeholder="Correo electrónico"
            className="register-modal__input"
            required
          />
  
          {/* Contraseña */}
          <input
            type={passwordType}
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
            placeholder="Contraseña"
            className="register-modal__input"
            required
          />
  
          {/* Selección de Género */}
          <div className="register-modal__gender-selection">
            <label htmlFor="gender">Género</label>
            <select
              name="gender"
              value={userInfo.gender}
              onChange={handleInputChange}
              className="register-modal__select"
              required
            >
              <option value="">Selecciona tu género</option>
              <option value="Male">Masculino</option>
              <option value="Female">Femenino</option>
              <option value="Other">Otro</option>
            </select>
          </div>
  
          {/* Fecha de Nacimiento */}
          <div className="register-modal__date-of-birth">
            <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
            <input
              type="date"
              name="dateOfBirth"
              value={userInfo.dateOfBirth ? userInfo.dateOfBirth.toISOString().split('T')[0] : ''}
              onChange={handleInputChange}
              className="register-modal__input"
              required
            />
          </div>
  
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
