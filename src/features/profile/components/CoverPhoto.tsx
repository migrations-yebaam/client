import React, { useState, useEffect } from 'react';
import { ChangeCoverPhotoModal } from './modals/ChangeCoverPhotoModal';
import { readAsBase64 } from '../../../shared/utils/image-utils.service';
import { useAppSelector } from '../../../store/store';
import { useUploadBackgroundImageMutation, useGetUserImagesQuery } from '../services/images.service';
import { IReduxState } from '../../../store/store.interface';
import { IAuthUser } from '../../auth/interfaces/auth.interface';
import { skipToken } from '@reduxjs/toolkit/query'; // Importar skipToken

const CoverPhoto: React.FC = () => {
  const authUser: IAuthUser = useAppSelector((state: IReduxState) => state.authUser); // Obtener authUser del estado global
  const [showCoverModal, setShowCoverModal] = useState(false);
  const [coverPhotoUrl, setCoverPhotoUrl] = useState(authUser.bgImageId && authUser.bgImageVersion
    ? `https://res.cloudinary.com/dzqpacupf/image/upload/v${authUser.bgImageVersion}/${authUser.bgImageId}`
    : authUser.profilePicture
  ); // Estado para la imagen de portada
  const [uploadBackgroundImage] = useUploadBackgroundImageMutation();

  // Validar que authUser.userId no sea null antes de hacer la query
  const { data: userImages } = useGetUserImagesQuery(authUser.userId ? { userId: authUser.userId } : skipToken);

  useEffect(() => {
    if (userImages?.bgImageId && userImages?.bgImageVersion) {
      const newCoverPhotoUrl = `https://res.cloudinary.com/dzqpacupf/image/upload/v${userImages.bgImageVersion}/${userImages.bgImageId}`;
      setCoverPhotoUrl(newCoverPhotoUrl);
    }
  }, [userImages]);

  const handleCoverSave = async (image: File | null) => {
    if (image) {
      try {
        const base64Image = await readAsBase64(image);
        const response = await uploadBackgroundImage({ image: base64Image as string }).unwrap();
        console.log('Image uploaded successfully:', response);

        // Actualizar la URL de la imagen de fondo
        const newCoverPhotoUrl = `https://res.cloudinary.com/dzqpacupf/image/upload/v${response.imgVersion}/${response.imgId}`;
        setCoverPhotoUrl(newCoverPhotoUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
    setShowCoverModal(false);
  };

  const handleOpenModal = () => {
    setShowCoverModal(true);
  };

  return (
    <div className="position-relative">
      <img
        src={coverPhotoUrl || ''} // Mostrar la imagen actualizada o la predeterminada
        alt="Cover"
        className="img-fluid w-100"
        style={{ height: '300px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={handleOpenModal}
      />
      <button
        className="btn btn-light position-absolute bottom-0 end-0 m-3"
        style={{ cursor: 'pointer' }}
        onClick={handleOpenModal}
      >
        <i className="bi bi-camera-fill me-2"></i> Editar foto de portada
      </button>

      {showCoverModal && (
        <ChangeCoverPhotoModal
          show={showCoverModal}
          onClose={() => setShowCoverModal(false)}
          onSave={handleCoverSave}
        />
      )}
    </div>
  );
};

export { CoverPhoto };
