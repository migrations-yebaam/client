import React from 'react';
import styles from '../VideosPage.module.scss';

interface VideoCardProps {
  title: string;
  description: string;
  views: string;
  thumbnailSrc: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ title, description, views, thumbnailSrc }) => {
  return (
    <div className={styles.videoCard}>
      <img src={thumbnailSrc} alt={title} className={styles.thumbnail} />
      <h6>{title}</h6>
      <p>{description}</p>
      <p className={styles.views}>{views}</p>
      <button className="btn btn-primary">Ver video</button>
    </div>
  );
};
