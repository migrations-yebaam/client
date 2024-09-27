import React from 'react';
import { useAppSelector } from '../../../../store/store';
import { IReduxState } from '../../../../store/store.interface';

export const UserProfileComponent: React.FC = () => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  return (
    <div className="user-profile d-flex align-items-center mb-4">
      <img 
        src={authUser.profilePicture || ''} 
        alt="Profile" 
        className="rounded-circle me-2"
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
      />
      <div>
        <h6 className="mb-0">{authUser.username}</h6>
      </div>
    </div>
  );
};
