import React, { useState, useEffect } from 'react';
import { ChangeProfilePictureModal } from './modals/ChangeProfilePictureModal';
import { readAsBase64 } from '../../../shared/utils/image-utils.service';
import { useAppSelector } from '../../../store/store';
import { useUploadProfileImageMutation, useGetUserImagesQuery } from '../services/images.service';
import { IReduxState } from '../../../store/store.interface';
import { IAuthUser } from '../../auth/interfaces/auth.interface';
import { skipToken } from '@reduxjs/toolkit/query';

type ProfilePictureWithFriendsProps = {
  friends: any[];
};

const ProfilePictureWithFriends: React.FC<ProfilePictureWithFriendsProps> = ({ friends }) => {
  const authUser: IAuthUser = useAppSelector((state: IReduxState) => state.authUser); // Obtener authUser del estado global
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState(authUser.profilePicture || ''); // Estado para la imagen de perfil
  const [uploadProfileImage] = useUploadProfileImageMutation();
  const { data: userImages } = useGetUserImagesQuery(authUser.userId ? { userId: authUser.userId } : skipToken); // Validar que userId no sea null

  useEffect(() => {
    if (userImages?.profilePicture) {
      setProfilePictureUrl(userImages.profilePicture); // Actualizar la URL de la imagen de perfil
    }
  }, [userImages]);

  const handleProfileSave = async (image: File | null) => {
    if (image) {
      try {
        const base64Image = await readAsBase64(image);
        const response = await uploadProfileImage({ image: base64Image as string }).unwrap();
        console.log('Profile image uploaded successfully:', response);
  
        // Actualizar el estado local inmediatamente con la nueva URL de la imagen de perfil
        if (response.profilePicture && typeof response.profilePicture === 'string') {
          setProfilePictureUrl(response.profilePicture); // Actualiza el estado para que el cambio sea inmediato
        }
      } catch (error) {
        console.error('Error uploading profile image:', error);
      }
    }
    setShowProfileModal(false);
  };
  

  return (
    <div className="d-flex align-items-center position-relative mt-n5">
      <div className="position-relative">
        <img
          src={profilePictureUrl || ''} // Mostrar la imagen actualizada o la predeterminada
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
          <h2 className="fw-bold">{`${authUser.username}`}</h2>
        </div>

        <div className="d-flex mt-2">
          {/* Lista de amigos */}
          {friends?.map((friend) => (
            <img
              key={friend?._id}
              src={friend?.imageSrc}
              alt={friend?.name}
              className="rounded-circle border border-2 border-white"
              style={{ width: '40px', height: '40px', objectFit: 'cover', marginLeft: '-10px' }}
            />
          ))}
        </div>
      </div>

      {showProfileModal && (
        <ChangeProfilePictureModal
          show={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          onSave={handleProfileSave}
        />
      )}
    </div>
  );
};

export { ProfilePictureWithFriends };
