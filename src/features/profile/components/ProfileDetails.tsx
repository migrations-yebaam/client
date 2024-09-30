import React from 'react';
import { KTIcon } from '../../../components/helpers';

type ProfileDetails = {
  currentUser: any;
  friends: any[];
};

const flexCenterClasess = 'd-flex align-items-center mb-2';
const itemClasses =`${flexCenterClasess} text-gray-500 text-hover-primary me-5`;

const ProfileDetails: React.FC<ProfileDetails> = ({currentUser, friends}) => {
  const detailList = [
    {
      icon: 'profile-circle',
      property: currentUser.occupation,
    },
    {
      icon: 'profile-circle',
      property: `${friends?.length} amigos`,
    },
    {
      icon: 'geolocation',
      property: currentUser.address?.city
    },
    {
      icon: 'sms',
      property: currentUser.email
    }
  ];

  return (
    <div className='d-flex flex-column'>
      <div className={flexCenterClasess}>
        <a className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
        {`${currentUser?.first_name} ${currentUser?.last_name}`}
        </a>
        <a>
          <KTIcon iconName='verify' className='fs-1 text-primary' />
        </a>
      </div>

      <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
        {detailList.map( item =>(
          <a className={itemClasses}>
            <KTIcon iconName={item.icon} className='fs-4 me-1' />
            {item.property}
          </a>
        ))}
      </div>
    </div>
  );
};
export { ProfileDetails };
