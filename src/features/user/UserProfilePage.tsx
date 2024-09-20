/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { ProfileUserHeader } from './ProfileUserHeader';
import { PostUser } from './pages/post/PostUser';
import { InfoUser } from './pages/info/InfoProfileUser';
import { FriendPage } from './pages/FriendPage';
import { PhotoPage } from './pages/PhotoPage';
import { VideoPage } from './pages/VideoPage';





const UserProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const userId = id ?? ''; 
  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileUserHeader userId={userId} /> 
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PostUser userId={userId} /> 
            </>
          }
        />
        <Route
          path='info'
          element={
            <>
              <InfoUser userId={userId} /> 
            </>
          }
        />
        <Route
          path='friends'
          element={
            <>
              <FriendPage userId={userId} /> 
            </>
          }
        />
        <Route
          path='photos'
          element={
            <>
              <PhotoPage userId={userId} /> 
            </>
          }
        />
        <Route
          path='videos'
          element={
            <>
              <VideoPage userId={userId} /> 
            </>
          }
        />
        <Route index element={<Navigate to='overview' />} />
      </Route>
    </Routes>
  );
};

export default UserProfilePage;
