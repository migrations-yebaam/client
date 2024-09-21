import React from 'react';

interface EventCardProps {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const EventCard: React.FC<EventCardProps> = ({ date, title, description, imageSrc }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <p className="card-text"><small className="text-muted">{date}</small></p>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
