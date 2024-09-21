import React from 'react';
import { KTIcon } from '../../../components/helpers';

const ProfileStats: React.FC = () => { 
  const BadgetList = ['Badget A', 'BadgetB'];

  return (
  <div className='d-flex flex-column flex-grow-1 pe-8'>
    <div className='d-flex flex-wrap'>

      {BadgetList.map(item => (
        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
          <div className='d-flex align-items-center'>
            <KTIcon iconName='' className='fs-3 text-success me-2' />
            <div className='fs-2 fw-bolder'>{item}</div>
          </div>
        </div>
      ))}        
    </div>
  </div>
);
};

export { ProfileStats };
