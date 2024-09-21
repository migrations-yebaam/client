import React from 'react';
import { PhotoTabs } from './photos/PhotoTabs';

interface PhotoPageProps {
  userId: string;
}

const PhotoPage: React.FC<PhotoPageProps> = ({ userId }) => {
  return (
    <div>
      <h2>Fotos del usuario {userId}</h2>
      <PhotoTabs />
    </div>
  );
};

export { PhotoPage };
