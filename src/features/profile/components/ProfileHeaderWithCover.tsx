import React from 'react';
import { CoverPhoto } from './CoverPhoto';
import { ProfilePictureWithFriends } from './ProfilePictureWithFriends';
import styles from '../scss/ProfileHeaderWithCover.module.scss';


type ProfileHeaderWithCover = {
  currentUser: any;
  friends: any[];
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
