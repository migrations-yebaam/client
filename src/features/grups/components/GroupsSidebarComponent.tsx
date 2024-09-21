// GroupsSidebarComponent.tsx
import React from 'react';
import { GroupSearchComponent } from './GroupSearchComponent';
import { GroupFeedComponent } from './GroupFeedComponent';


export const GroupsSidebarComponent: React.FC = () => {
  return (
    <div className="groups-sidebar">
      <GroupSearchComponent />
      <GroupFeedComponent />
    </div>
  );
};
