import React from 'react';
import { Content } from '../../components/layout/components/Content';
import { ProfileDetails } from './components/ProfileDetails';
// import { ProfilePicture } from './components/ProfilePicture';
import { ProfileStats } from './components/ProfileStats';
import { ProfileTabs } from './components/ProfileTabs';
import { ProfileHeaderWithCover } from './components/ProfileHeaderWithCover';
import { UserModel } from '../auth';
import { friendModel } from '../../shared/interfaces/shared.interface';

type ProfileHeader = {
  currentUser: UserModel;
  friends: friendModel[];
};
const ProfileHeader: React.FC<ProfileHeader> = ({currentUser, friends}) => (
  <Content>
    <ProfileHeaderWithCover currentUser={currentUser} friends={friends} />
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='flex-grow-1'>
            <ProfileDetails currentUser={currentUser}  friends={friends}  />
            <div className='d-flex flex-wrap flex-stack'>
              <ProfileStats /> {/* insignias */}
            </div>
          </div>
        </div>
        <ProfileTabs />
      </div>
    </div>
  </Content>
);

export { ProfileHeader };
