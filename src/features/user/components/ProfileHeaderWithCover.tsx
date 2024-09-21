import React from 'react';
import { CoverUserPhoto } from './CoverUserPhoto';
import { ProfilePictureUserWithFriends } from './ProfilePictureUserWithFriends';
import styles from '../scss/ProfileHeaderWithCover.module.scss';

const ProfileHeaderUserWithCover: React.FC = () => (
  <div className={styles['profile-header-container']}>
    <CoverUserPhoto />
    <div className={styles['profile-picture-and-info ']}>
      <ProfilePictureUserWithFriends />
    </div>
  </div>
);

export { ProfileHeaderUserWithCover };
