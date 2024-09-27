/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Content } from '../../../../components/layout/components/Content';
import { InfoUserSidebar } from './InfoSidebar';
import { InfoUserDetails } from './InfoUserDetails';
import { UserFriendsList } from '../friend/UserFriendsList';
import { UserModel } from '../../../../models/userModel';
import { friendModel } from '../../../../models/friendModel';

interface InfoProfileUserProps {
  currentUser: UserModel;
  friends: friendModel[];
}

const InfoUser: React.FC<InfoProfileUserProps> = ({currentUser, friends}) => {
  const [selectedInfoSection, onSelectedInfoSection] = useState('Información general');

  return (
    <Content>
      <div className="row">
        <div className="col-md-4">
          <InfoUserSidebar 
            selectedInfoSection={selectedInfoSection}
            onSelectedInfoSection={onSelectedInfoSection} />        
        </div>
        <div className="col-md-8">
          <InfoUserDetails
          selectedInfoSection={selectedInfoSection}
          currentUser={currentUser}/>
        </div>
      </div>
      <UserFriendsList friends={friends} />
     

    </Content>
  );
};

export { InfoUser };
