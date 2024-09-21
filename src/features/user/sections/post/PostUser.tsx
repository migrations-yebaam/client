/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { friendModel } from '../../../../models/friendModel';
import { UserModel } from '../../../../models/userModel';
import { PostList } from '../../../post/PostList';
import { UserFriendsPanel } from '../../../profile/components/postUser/UserFriendsPanel';
import { UserPhotosPanel } from '../../../profile/components/postUser/UserPhotosPanel';
import { UserDetailsPanel } from './PostUserDetailsPanel';
import { UserPostInput } from './UserPostInput';

export function PostUser({currentUser, friends}: {currentUser: UserModel, friends: friendModel[]}) {
  return (
    <Content>
      <div className='row g-5 g-xxl-8'>
        <div className='col-xl-4'>
          <UserDetailsPanel />
          <UserPhotosPanel /> 
          <UserFriendsPanel  friends={friends}/>
        </div>

        <div className='col-xl-8'>
          <UserPostInput />
{/*           <PostFilters />   */} 
    <PostList  currentUser={currentUser}/> 
        </div>
      </div>
    </Content>
  )
}
