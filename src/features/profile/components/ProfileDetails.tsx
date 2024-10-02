import React from 'react';
import { useAppSelector } from '../../../store/store';
import { IAuthUser } from '../../auth/interfaces/auth.interface';
import { IReduxState } from '../../../store/store.interface';
import { KTIcon } from '../../../components/helpers';

type ProfileDetailsProps = {
  friends: { _id: string; name: string; imageSrc: string }[]; // Definir un tipo adecuado para los amigos
};

const flexCenterClasses = 'd-flex align-items-center mb-2';
const itemClasses = `${flexCenterClasses} text-gray-500 text-hover-primary me-5`;

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ friends }) => {
  const authUser: IAuthUser = useAppSelector((state: IReduxState) => state.authUser); // Obtener authUser del estado global

  const detailList = [
    {
      icon: 'profile-circle',
      property: authUser.quote || 'Desconocido', // Mostrar "Desconocido" si no hay ocupación
    },
    {
      icon: 'profile-circle',
      property: `${friends?.length} amigos`,
    },
    {
      icon: 'geolocation',
      property: authUser.work || 'Ciudad no especificada', 
    },
    {
      icon: 'sms',
      property: authUser.email || 'Email no disponible',
    },
  ];

  return (
    <div className="d-flex flex-column">
      <div className={flexCenterClasses}>
        <a className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">
          {`${authUser?.username || 'Usuario'}`} {/* Mostrar el nombre de usuario o "Usuario" si es nulo */}
        </a>
        <a>
          <KTIcon iconName="verify" className="fs-1 text-primary" />
        </a>
      </div>

      <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
        {detailList.map((item, index) => (
          <a key={index} className={itemClasses}>
            <KTIcon iconName={item.icon} className="fs-4 me-1" />
            {item.property}
          </a>
        ))}
      </div>
    </div>
  );
};

export { ProfileDetails };
