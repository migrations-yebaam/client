/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ChangeProfilePictureModal } from './modals/ChangeProfilePictureModal';


type ProfilePictureWithFriends = {
  currentUser: any;
  friends: any[];
};

const ProfilePictureWithFriends: React.FC<ProfilePictureWithFriends> = ({currentUser, friends}) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const handleProfileSave = (image: File | null) => {
    // Lógica para guardar la nueva imagen de perfil
    setShowProfileModal(false);
  };

  return (
    <div className="d-flex align-items-center position-relative mt-n5">
      <div className="position-relative">
        <img
          src={''}
          alt="Profile"
          className="rounded-circle border border-3 border-white"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <button
          className="btn btn-light rounded-circle position-absolute bottom-0 end-0"
          onClick={() => setShowProfileModal(true)} // Abre el modal
        >
          <i className="bi bi-camera-fill"></i>
        </button>
      </div>

      <div className="ms-3">
        <div className="text-center">
          {/* <h2 className="fw-bold">{`${currentUser.first_name} ${currentUser.last_name}`}</h2> */}
        </div>

        <div className="d-flex mt-2">
          {/* Lista de amigos */}
          {friends?.map((friend) => (
            <img
              key={friend?._id}
              src= {friend?.imageSrc}
              alt={friend?.name}
              className="rounded-circle border border-2 border-white"
              style={{ width: '40px', height: '40px', objectFit: 'cover', marginLeft: '-10px' }}
            />
          ))}
        </div>
      </div>

      <ChangeProfilePictureModal
        show={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        onSave={handleProfileSave}
      />
    </div>
  );
};

export { ProfilePictureWithFriends };
