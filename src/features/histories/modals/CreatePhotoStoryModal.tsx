import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAppSelector } from '../../../store/store';
import { IReduxState } from '../../../store/store.interface';
import { useCreateHistorieMutation } from '../services/historie.service'; // Importar el hook de la mutación
import { IHistoriePayload } from '../interfaces/historie.interfaces';

interface CreatePhotoStoryModalProps {
  show: boolean;
  onClose: () => void;
}

const CreatePhotoStoryModal: React.FC<CreatePhotoStoryModalProps> = ({ show, onClose }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [createHistorie, { isLoading, isSuccess, isError }] = useCreateHistorieMutation(); // Hook para la mutación
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  // Manejar la selección de la imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Mostrar la previsualización de la imagen
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para manejar el envío de la historia con la imagen
  const handleShareStory = async () => {
    if (!selectedImage) {
      alert('Por favor, selecciona una imagen antes de compartir.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const mediaUrl = reader.result as string;

      const payload: IHistoriePayload = {
        content: 'Esta es mi historia con una imagen',
        mediaUrl: mediaUrl,
        mediaType: 'image',
      };

      try {
        await createHistorie(payload).unwrap(); // Enviar la solicitud al backend
        console.log('Historia compartida con éxito');
        onClose(); // Cerrar el modal después de compartir la historia
      } catch (error) {
        console.error('Error al compartir la historia:', error);
      }
    };

    reader.readAsDataURL(selectedImage); // Convertir la imagen a base64
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Tu historia</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center">
          <img
            src={`${authUser.profilePicture}`}
            alt="Profile"
            className="rounded-circle"
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <h5 className="ml-3">{authUser.firstName}</h5>
        </div>

        {/* Selección de imagen */}
        <div className="my-4">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {/* Vista previa de la imagen seleccionada */}
        {imagePreview ? (
          <div className="image-preview" style={{ textAlign: 'center' }}>
            <img
              src={imagePreview}
              alt="Vista previa de la imagen"
              style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
            />
            <p>Selecciona una foto para recortar y rotar</p>
          </div>
        ) : (
          <div className="text-center">Ninguna imagen seleccionada</div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Descartar
        </Button>
        <Button variant="primary" onClick={handleShareStory} disabled={isLoading}>
          {isLoading ? 'Compartiendo...' : 'Compartir en historia'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePhotoStoryModal;
