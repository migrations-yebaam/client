import React from 'react';
import { Content } from '../../components/layout/components/Content';
import { ProfileDetails } from './components/ProfileDetails';
// import { ProfilePicture } from './components/ProfilePicture';
import { ProfileStats } from './components/ProfileStats';
import { ProfileTabs } from './components/ProfileTabs';
import { ProfileHeaderWithCover } from './components/ProfileHeaderWithCover';

type ProfileHeaderProps = {
  currentUser: any;
  friends: any[];
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ currentUser, friends, onSelectedNav, currentSelectedNav }) => {

  return (
    <Content>
      <ProfileHeaderWithCover currentUser={currentUser} friends={friends} />
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className='flex-grow-1'>
              <ProfileDetails currentUser={currentUser} friends={friends} />
              <div className='d-flex flex-wrap flex-stack'>
                <ProfileStats /> {/* insignias */}
              </div>
            </div>
          </div>
          <ProfileTabs onSelectedNav={onSelectedNav} currentSelectedNav={currentSelectedNav} />
        </div>
      </div>
    </Content>
  );
};

export { ProfileHeader };
