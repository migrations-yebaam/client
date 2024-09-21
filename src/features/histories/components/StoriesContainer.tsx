import React from 'react';
import Story from './Story';
import CreateStory from './CreateStory';

const StoriesContainer: React.FC = () => {
  return (
    <div className="d-flex gap-2">
      <CreateStory />
      <Story profileImage="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" storyImage="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Leifer Mendez" />
      <Story profileImage="https://plus.unsplash.com/premium_photo-1705091981893-15c9a7d33a31?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" storyImage="https://plus.unsplash.com/premium_photo-1705091981893-15c9a7d33a31?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="RDGaming006" />
      <Story profileImage="https://images.unsplash.com/photo-1693341052623-c70686d937a4?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" storyImage="https://images.unsplash.com/photo-1693341052623-c70686d937a4?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Jota Pe Hernández" hasNavigation={true} />
    </div>
  );
};

export default StoriesContainer;
