import React from 'react';
import { KTIcon } from '../../../components/helpers';
import { useAppSelector } from '../../../store/store';
import { IReduxState } from '../../../store/store.interface';

const ProfileUserDetails: React.FC = () => {
  // Declaración de la constante authUser
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex align-items-center mb-2'>
        <a className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
          {authUser?.username || 'Max Smith'}
        </a>
        <a>
          <KTIcon iconName='verify' className='fs-1 text-primary' />
        </a>
      </div>

      <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
        <a className='d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2'>
          <KTIcon iconName='profile-circle' className='fs-4 me-1' />
          {authUser?.quote || 'coupacion'} 

        </a>
        <a className='d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2'>
          <KTIcon iconName='profile-circle' className='fs-4 me-1' />
          {authUser?.followingCount || 'numeroAmigos'} 

        </a>
        <a className='d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2'>
          <KTIcon iconName='geolocation' className='fs-4 me-1' />
          {authUser?.school || 'ubicacion'} 
        </a>
        <a className='d-flex align-items-center text-gray-500 text-hover-primary mb-2'>
          <KTIcon iconName='sms' className='fs-4 me-1' />
          {authUser?.email || 'email'} 

        </a>
      </div>
    </div>
  );
};

export { ProfileUserDetails };
