import React from 'react';
import Story from './Story';
import CreateStory from './CreateStory';
import Spinner from 'react-bootstrap/Spinner';
import { useGetAllHistoriesQuery } from '../services/historie.service';
import { IReduxState } from '../../../store/store.interface';
import { useAppSelector } from '../../../store/store';

const StoriesContainer: React.FC = () => {
  const { data, error, isLoading } = useGetAllHistoriesQuery();
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  console.log('===========',data)

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <div>Error fetching stories</div>;
  }

  return (
    <div className="d-flex gap-2">
      <CreateStory />
      {data?.stories?.length ? (
  data.stories.map((story) => (
    <Story
      key={story._id}
      profileImage={`${authUser.profilePicture}`} // Imagen por defecto si no hay URL
      storyImage={story.mediaUrl || 'https://plus.unsplash.com/premium_photo-1727558768347-eefa5276de9d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} // Imagen por defecto si no hay URL
      name={story.user?.firstName }
      
    />
  ))
) : (
  <div>No stories available</div>
)}

    </div>
  );
  
  
};

export default StoriesContainer;
