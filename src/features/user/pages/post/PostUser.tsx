/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Content } from '../../../../components/layout/components/Content';
import { PostUserDetailsPanel } from './PostUserDetailsPanel';
import { PhotosPanel } from '../photos/PhotosPanel';
import { FriendsPanel } from '../friend/FriendsPanel';
import { UserPostInput } from './UserPostInput';

interface PostUserProps {
  userId: string;
}

const PostUser: React.FC<PostUserProps> = ({ userId }) => {
  return (
    <Content>
    <div className='row g-5 g-xxl-8'>
      <div className='col-xl-4'>
      
        <PostUserDetailsPanel />
        <PhotosPanel/>
        <FriendsPanel />
      </div>

      <div className='col-xl-8'>
        <UserPostInput />
       
        PostFilters
        PostListdetail reciente
      </div>
    </div>
  </Content>
  );
};

export { PostUser };
