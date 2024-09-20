import React from 'react';

const ProfilePicture: React.FC = () => (
  <div className='me-7 mb-4'>
    <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
      <img 
        src="https://images.unsplash.com/photo-1723647395168-d916159b78c9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt='Metornic' 
      />
      <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
    </div>
  </div>
);

export { ProfilePicture };
