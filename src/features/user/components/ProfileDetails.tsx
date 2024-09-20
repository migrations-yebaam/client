import React from 'react';
import { KTIcon } from '../../../components/helpers';

const ProfileUserDetails: React.FC = () => (
  <div className='d-flex flex-column'>
    <div className='d-flex align-items-center mb-2'>
      <a className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
        Max Smith
      </a>
      <a>
        <KTIcon iconName='verify' className='fs-1 text-primary' />
      </a>
    </div>

    <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
      <a className='d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2'>
        <KTIcon iconName='profile-circle' className='fs-4 me-1' />
        Ocupación
      </a>
      <a className='d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2'>
        <KTIcon iconName='profile-circle' className='fs-4 me-1' />
        Amigos
      </a>
      <a className='d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2'>
        <KTIcon iconName='geolocation' className='fs-4 me-1' />
        Localización
      </a>
      <a className='d-flex align-items-center text-gray-500 text-hover-primary mb-2'>
        <KTIcon iconName='sms' className='fs-4 me-1' />
        Email
      </a>
    </div>
  </div>
);

export { ProfileUserDetails };
