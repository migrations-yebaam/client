import React from 'react';
import Button from 'react-bootstrap/Button';

interface StoryProps {
  profileImage: string;
  storyImage: string;
  name: string;
  hasNavigation?: boolean;
}

const Story: React.FC<StoryProps> = ({ profileImage, storyImage, name, hasNavigation = false }) => {
  return (
    <div className="story d-flex flex-column" style={{ width: '120px', height: '220px', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
      <img src={storyImage} alt={`${name}'s story`} className="w-100 h-100" style={{ objectFit: 'cover' }} />
      <div className="position-absolute" style={{ top: '10px', left: '10px', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #0078ff' }}>
        <img src={profileImage} alt={`${name}'s profile`} className="w-100 h-100" style={{ objectFit: 'cover' }} />
      </div>
      <div className="text-white font-weight-bold position-absolute" style={{ bottom: '10px', left: '10px' }}>{name}</div>
      {hasNavigation && (
        <Button variant="light" className="position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', borderRadius: '50%' }}>
          &gt;
        </Button>
      )}
    </div>
  );
};

export default Story;
