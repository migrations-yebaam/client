import React from 'react'
import { UserDetailsPanel } from './UserDetailsPanel'
import { PostInput } from './PostInput'
// import { PostFilters } from './PostFilters'
import { PostList } from './PostList'
import { Content } from '../../../../components/layout/components/Content'
import { UserFriendsPanel } from './UserFriendsPanel'
import { UserPhotosPanel } from './UserPhotosPanel'
import { UserModel } from '../../../auth'
import { friendModel } from '../../../../shared/interfaces/shared.interface'

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
          <PostInput />
{/*           <PostFilters />
 */}          <PostList  currentUser={currentUser}/>
        </div>
      </div>
    </Content>
  )
}
