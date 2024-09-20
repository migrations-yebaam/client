import React from 'react'
import { Content } from '../../../../components/layout/components/Content'

const VideoItem: React.FC<{ videoSrc: string, title: string, duration: string }> = ({ videoSrc, title, duration }) => (
  <div className="position-relative mb-4">
    <video src={videoSrc} controls className="img-fluid rounded mb-2" />
    <div className="position-absolute top-0 start-0 p-1 bg-dark text-white rounded">
      {duration}
    </div>
    <h5>{title}</h5>
  </div>
);

export function VideoPageT() {
  const videos = [
    { src: 'video-url-1.mp4', title: 'Video 1', duration: '5:30' },
    { src: 'video-url-2.mp4', title: 'Video 2', duration: '3:45' },
    { src: 'video-url-3.mp4', title: 'Video 3', duration: '10:15' },
    { src: 'video-url-3.mp4', title: 'Video 3', duration: '10:15' },
  ];

  return (
    <Content>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Mis Videos
          <span className='fs-6 text-gray-500 fw-bold ms-1'>({videos.length})</span>
        </h3>
      </div>

      <div className='row g-6 g-xl-9'>
        {videos.map((video, index) => (
          <div className='col-md-6 col-xxl-4' key={index}>
            <VideoItem videoSrc={video.src} title={video.title} duration={video.duration} />
          </div>
        ))}
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Mostrando 1 a 10 de {videos.length} videos</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>
          {/* Puedes agregar más páginas aquí */}
          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </Content>
  )
}
