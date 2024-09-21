import React from 'react';

interface VideoGridProps {
  videos: { src: string; id: number; duration: string }[];
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="row">
      {videos.map((video) => (
        <div key={video.id} className="col-4 mb-3">
          <div className="position-relative">
            <img src={video.src} alt={`Video ${video.id}`} className="img-fluid rounded" />
            <span className="position-absolute bottom-0 start-0 text-white bg-dark px-2 py-1">{video.duration}</span>
            <button className="btn btn-light position-absolute top-0 end-0 m-1">
              <i className="bi bi-pencil"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
