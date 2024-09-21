import React from 'react';

interface ContactItemProps {
  name: string;
  email: string;
  time: string;
  imgSrc: string;
  symbol: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ name, email, time, imgSrc, symbol }) => (
  <div className='d-flex flex-stack py-4'>
    <div className='d-flex align-items-center'>
      <div className='symbol symbol-45px symbol-circle'>
        {imgSrc ? <img alt='Pic' src={imgSrc} /> : <span className='symbol-label bg-light-danger text-danger fs-6 fw-bolder'>{symbol}</span>}
      </div>
      <div className='ms-5'>
        <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
          {name}
        </a>
        <div className='fw-bold text-gray-500'>{email}</div>
      </div>
    </div>
    <div className='d-flex flex-column align-items-end ms-2'>
      <span className='text-muted fs-7 mb-1'>{time}</span>
    </div>
  </div>
);
