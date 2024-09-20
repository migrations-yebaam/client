import React, { useState } from 'react';
import styles from '../VideosPage.module.scss';

interface VideoItemProps {
  profilePicture: string;
  username: string;
  uploadedDate: string;
  title: string;
  description: string;
  videoId: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
}

export const VideoItem: React.FC<VideoItemProps> = ({
  profilePicture,
  username,
  uploadedDate,
  title,
  description,
  videoId,
  views,
  likes,
  comments,
  shares,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.videoItem}>
      <div className={styles.header}>
        <img src={profilePicture} alt={`${username} profile`} className={styles.profilePicture} />
        <div className={styles.userInfo}>
          <p className={styles.username}>
            {username}  <a href="#!">Segir</a>
          </p>
          <p className={styles.uploadedDate}>Published: {uploadedDate}</p>
        </div>
        <button className={styles.moreOptions}>...</button>
      </div>

      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
        <div className={styles.videoContainer}>
          {!isPlaying ? (
            <>
              <img src={youtubeThumbnail} alt={title} className={styles.thumbnail} />
              <div className={styles.playButton} onClick={handlePlay}>
                ▶
              </div>
            </>
          ) : (
            <iframe
              src={youtubeEmbedUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            ></iframe>
          )}
        </div>
      </div>

      <div className={styles.interactions}>
        <p>
          <span className={styles.views}>{views} views</span> <span>{comments} comments</span>{' '}
          <span>{likes} likes</span> <span>{shares} shares</span>
        </p>
      </div>

      <div className={styles.actions}>
        <button className="btn btn-light">Like</button>
        <button className="btn btn-light">Comment</button>
        <button className="btn btn-light">Share</button>
      </div>
    </div>
  );
};
