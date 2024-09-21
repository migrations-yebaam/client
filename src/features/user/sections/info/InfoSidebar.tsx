import React from 'react';


export const InfoUserSidebar: React.FC = ({selectedInfoSection, onSelectedInfoSection}) => {
  const ListInfoSection = [
    {
      title: 'Información general',
      content: 'Información general',
    },
    {
      title: 'Empleo y formación',
      content: 'Empleo y formación',
    },
    {
      title: 'Lugares de residencia',
      content: 'Lugares de residencia',
    },
    {
      title: 'Información básica y de contacto',
      content: 'Información básica y de contacto',
    },
    {
      title: 'Familia y relaciones',
      content: 'Familia y relaciones',
    },
    {
      title: 'Información sobre ti',
      content: 'Información sobre ti',
    },
    {
      title: 'Acontecimientos importantes',
      content: 'Acontecimientos importantes',
    },
  ];
  return (
    <div className="info-sidebar">
      <ul className="list-group">
        {ListInfoSection.map((item, index) => (
          <li
            className={`list-group-item ${item.title === selectedInfoSection ? 'active' : ''}`}
            onClick={() => onSelectedInfoSection(item.title)}
            key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
