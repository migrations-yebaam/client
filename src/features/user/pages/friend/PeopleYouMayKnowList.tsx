import React from 'react';
import { PersonCard } from './PersonCard';

interface Suggestion {
  name: string;
  mutualFriends: number;
  avatar: string;
}

interface PeopleYouMayKnowListProps {
  suggestions: Suggestion[];
}

export const PeopleYouMayKnowList: React.FC<PeopleYouMayKnowListProps> = ({ suggestions }) => {
  return (
    <div className="row">
      {suggestions.map((suggestion, index) => (
        <div key={index} className="col-md-3 col-sm-6 mb-4">
          <PersonCard
            name={suggestion.name}
            mutualFriends={suggestion.mutualFriends}
            avatar={suggestion.avatar}
          />
        </div>
      ))}
    </div>
  );
};
