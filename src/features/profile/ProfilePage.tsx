import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PostUser} from './components/postUser/PostUser'
import {InfoProfileUser} from './components/info/InfoProfileUser'
import {FriendPage} from './components/friend/FriendPage'
import {PhotoPage} from './components/photos/PhotoPage'
import {VideoPage} from './components/videos/VideoPage'
import {ProfileHeader} from './ProfileHeader'
import { PageLink, PageTitle } from '../../components/layout/core'
import { UserModel } from '../auth'
import { useEffect, useState } from 'react'
import { getMainlyFriends } from '../../services/friends'
import { friendModel } from '../../shared/interfaces/shared.interface'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/profile/posts',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

type ProfilePageProps = {
  currentUser: UserModel;
};

const ProfilePage: React.FC<ProfilePageProps> = ({currentUser}) => {
  const [friends, setFriends] = useState<friendModel[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const { data:friends } = await getMainlyFriends(currentUser.id);
      setFriends(friends);
    };
    fetchFriends();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileHeader currentUser={currentUser} friends={friends} />
            <Outlet />
          </>
        }
      >
        <Route
          path='posts'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Overviewdddd</PageTitle>
              <PostUser currentUser={currentUser} friends={friends}  />
            </>
          }
        />
        <Route
          path='info-profile'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Info</PageTitle>
              <InfoProfileUser />
            </>
          }
        />
        <Route
          path='friends'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Friend</PageTitle>
              <FriendPage friends={friends} />
            </>
          }
        />
        <Route
          path='photos'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Fotos</PageTitle>
              <PhotoPage />
            </>
          }
        />
        <Route
          path='videos'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Videos</PageTitle>
              <VideoPage />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/pages/profile/posts' />} />
      </Route>
    </Routes>
  )
  
}
  

export default ProfilePage
