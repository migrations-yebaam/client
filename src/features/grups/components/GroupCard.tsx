import React from 'react';
import styles from '../GroupsPage.module.scss'; // Importamos el SCSS module

interface GroupCardProps {
  name: string;
  type: string;
  members: string;
  imageSrc: string;
}

export const GroupCard: React.FC<GroupCardProps> = ({ name, type, members, imageSrc }) => {
  return (
    <div className={styles.groupCard}>
      <img src={imageSrc} alt={name} />
      <h6>{name}</h6>
      <p>{type}</p>
      <p>{members}</p>
      <button className="btn">Unirme</button>
    </div>
  );
};
