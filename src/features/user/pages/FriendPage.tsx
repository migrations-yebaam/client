import React from 'react';
import { UserFriendsList } from './friend/UserFriendsList';

interface FriendPageProps {
  userId: string;
}

const FriendPage: React.FC<FriendPageProps> = ({ userId }) => {
  return (
    <div>
      <h2>Amigos del usuario {userId}</h2>
      <UserFriendsList />
    </div>
  );
};

export { FriendPage };
