import React from 'react';
import { PeopleYouMayKnowList } from './PeopleYouMayKnowList';

const suggestionsData = [
  { name: 'Tino Pizarro Baudo', mutualFriends: 1, avatar: 'https://via.placeholder.com/150' },
  { name: 'Juan David Gonzalez', mutualFriends: 2, avatar: 'https://via.placeholder.com/150' },
  { name: 'Jhair Lance Gomez', mutualFriends: 3, avatar: 'https://via.placeholder.com/150' },
  { name: 'Luis Carlos Cucalon Bejarano', mutualFriends: 3, avatar: 'https://via.placeholder.com/150' },
  { name: 'Pedro Osorio', mutualFriends: 0, avatar: 'https://via.placeholder.com/150' },
];

export const PeopleYouMayKnow: React.FC = () => {
  return (
    <div className="people-you-may-know mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Personas que quizá conozcas</h5>
        <a href="#!" className="text-primary">Ver todas</a>
      </div>
      <PeopleYouMayKnowList suggestions={suggestionsData} />
    </div>
  );
};
