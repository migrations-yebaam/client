/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Content } from '../../../../components/layout/components/Content';
import { InfoUserSidebar } from './InfoSidebar';
import { InfoUserDetails } from './InfoUserDetails';
import { UserFriendsList } from '../friend/UserFriendsList';

interface InfoProfileUserProps {
  userId: string;
}

const InfoUser: React.FC<InfoProfileUserProps> = ({currentUser, friends}) => {
  const [selectedInfoSection, onSelectedInfoSection] = useState('Información general');
  return (
    <Content>
      <div className="row">
        <div className="col-md-4">
          <InfoUserSidebar  selectedInfoSection={selectedInfoSection} onSelectedInfoSection={onSelectedInfoSection} />
          
        </div>
        <div className="col-md-8">
          <InfoUserDetails  currentUser={currentUser}/>
        </div>
      </div>
      <UserFriendsList friends={friends} />
     

    </Content>
  );
};

export { InfoUser };
