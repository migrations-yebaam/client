import React from 'react';
import '../scss/StoryNavigationButton.scss';

const StoryNavigationButton: React.FC = () => {
  return (
    <button className="story-navigation-button">
      <span>&gt;</span>
    </button>
  );
};

export default StoryNavigationButton;
