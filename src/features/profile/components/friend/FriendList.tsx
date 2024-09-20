import React from 'react';
import { FriendCard } from './FriendCard';
import { friendModel } from '../../../../shared/interfaces/shared.interface';

type IFriendList = {
  friends: friendModel[];
};

export const FriendList: React.FC<IFriendList> = ({friends}) => {

  return (
    <div>
      {friends.map((friend, index) => (
        <FriendCard
          key={index}
          name={friend.name}
          mutualFriends={friend.mutualFriends}
          imageSrc={friend.imageSrc}
        />
      ))}
    </div>
  );
};
