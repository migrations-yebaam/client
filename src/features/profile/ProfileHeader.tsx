import React from 'react';
import { Content } from '../../components/layout/components/Content';
import { ProfileDetails } from './components/ProfileDetails';
// import { ProfilePicture } from './components/ProfilePicture';
import { ProfileStats } from './components/ProfileStats';
import { ProfileTabs } from './components/ProfileTabs';
import { ProfileHeaderWithCover } from './components/ProfileHeaderWithCover';
import { useAppSelector } from '../../store/store';
import { IReduxState } from '../../store/store.interface';

type ProfileHeaderProps = {
  currentUser: any;
  friends: any[];
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ currentUser, friends }) => {
  // Mover la lógica dentro del cuerpo del componente
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

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
          <ProfileTabs />
        </div>
      </div>
    </Content>
  );
};

export { ProfileHeader };
