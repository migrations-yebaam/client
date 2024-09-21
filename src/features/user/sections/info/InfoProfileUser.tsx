/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Content } from '../../../../components/layout/components/Content';
import { InfoUserSidebar } from './InfoSidebar';
import { InfoUserDetails } from './InfoUserDetails';
import { UserFriendsList } from '../friend/UserFriendsList';

interface InfoProfileUserProps {
  userId: string;
}

const InfoUser: React.FC<InfoProfileUserProps> = ({ userId }) => {
  return (
    <Content>
      <div className="row">
        <div className="col-md-4">
          <InfoUserSidebar />
          
        </div>
        <div className="col-md-8">
          <InfoUserDetails />
        </div>
      </div>
      <UserFriendsList />
     

    </Content>
  );
};

export { InfoUser };
