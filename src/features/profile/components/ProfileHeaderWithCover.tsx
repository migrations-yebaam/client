import React from 'react';
import { CoverPhoto } from './CoverPhoto';
import { ProfilePictureWithFriends } from './ProfilePictureWithFriends';
import styles from '../scss/ProfileHeaderWithCover.module.scss';
import { UserModel } from '../../auth';
import { friendModel } from '../../../shared/interfaces/shared.interface';

type ProfileHeaderWithCover = {
  currentUser: UserModel;
  friends: friendModel[];
};

const ProfileHeaderWithCover: React.FC<ProfileHeaderWithCover> = ({currentUser, friends}) => (
  <div className={styles['profile-header-container']}>
    <CoverPhoto currentUser={currentUser} />
    <div className={styles['profile-picture-and-info']}>
      <ProfilePictureWithFriends currentUser={currentUser} friends={friends} />
    </div>
  </div>
);

export { ProfileHeaderWithCover };
