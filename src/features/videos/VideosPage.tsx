/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import styles from './VideosPage.module.scss';
import { VideoItem } from './components/VideoItem';

// Simulamos una API que devuelve datos de videos
const fetchVideos = async () => {
  return [
    {
      profilePicture: 'https://via.placeholder.com/45',
      username: 'Jack Carter',
      uploadedDate: 'Sep 15, 2020',
      title: 'When your private pictures are used against you',
      description:
        'A film about a secret of a housewife which is revealed on her 3rd Wedding Anniversary',
      videoId: 'L3s1RWK5X18',
      views: '1.2k',
      likes: '5k',
      comments: '54',
      shares: '205',
    },
    {
      profilePicture: 'https://via.placeholder.com/45',
      username: 'John Doe',
      uploadedDate: 'Aug 10, 2020',
      title: 'The future of web development',
      description: 'Learn about the latest trends in web development.',
      videoId: 'dQw4w9WgXcQ',
      views: '5.3k',
      likes: '15k',
      comments: '340',
      shares: '350',
    },
 
  ];
};

const VideosPage: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      const videoData = await fetchVideos(); 
      setVideos(videoData);
      setLoading(false); 
    };

    getVideos();
  }, []); 

  if (loading) {
    return <div className="text-center">Cargando videos...</div>;
  }

  return (
    <div className={styles.videosPage}>
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          profilePicture={video.profilePicture}
          username={video.username}
          uploadedDate={video.uploadedDate}
          title={video.title}
          description={video.description}
          videoId={video.videoId}
          views={video.views}
          likes={video.likes}
          comments={video.comments}
          shares={video.shares}
        />
      ))}
    </div>
  );
};

export default VideosPage;
