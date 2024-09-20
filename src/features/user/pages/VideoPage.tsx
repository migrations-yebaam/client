import React from 'react';
import { VideoPageT } from './videos/VideoPage';

interface VideoPageProps {
  userId: string;
}

const VideoPage: React.FC<VideoPageProps> = ({ userId }) => {
  return (
    <div>
      <h2>Videos del usuario {userId}</h2>
      <VideoPageT />
    </div>
  );
};

export { VideoPage };
