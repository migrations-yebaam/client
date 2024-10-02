import React, { useState, useEffect } from 'react';
import { EditPresentationModal } from '../modals/EditPresentationModal';
import { EditDetailsModal } from '../modals/EditDetailsModal'; // Importamos el nuevo modal
import { InfoUserDetails } from '../../../user/sections/info/InfoUserDetails';
import { useUpdateBasicInfoMutation } from '../../services/profile.service';
import { useAppSelector } from '../../../../store/store';
import { IReduxState } from '../../../../store/store.interface';

export const UserDetailsPanel: React.FC = () => {
  const [showPresentationModal, setShowPresentationModal] = useState(false); // Estado para controlar la visibilidad del modal de presentación
  const [showDetailsModal, setShowDetailsModal] = useState(false); // Estado para controlar la visibilidad del modal de detalles
  const [presentation, setPresentation] = useState(''); // Estado para la presentación
  const [updateBasicInfo] = useUpdateBasicInfoMutation(); // Hook para la mutación
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  const [userDetails, setUserDetails] = useState({
    occupation: authUser?.work || '',
    education: ['Máster en Desarrollo Web Full Stack', 'Estudio Pregrado en UNIR'],
    city: authUser?.address?.city || '',
    originCity: 'De Boca de Pepé, Chocó, Colombia',
    phone: authUser?.phone || '',
  });

  // Usar useEffect para inicializar el estado con el valor de authUser cuando el componente se monta
  useEffect(() => {
    if (authUser?.quote) {
      setPresentation(authUser.quote); // Inicializar el estado con el quote de authUser
    }
  }, [authUser]);

  const handlePresentationSave = async (newPresentation: string) => {
    try {
      // Llamar a la mutación con el nuevo "quote"
      const response = await updateBasicInfo({ info: { quote: newPresentation } }).unwrap();
      console.log('Quote actualizado:', response);

      // Actualizar el estado local con la nueva presentación
      setPresentation(newPresentation);
      setShowPresentationModal(false); // Cerrar el modal después de guardar
    } catch (error) {
      console.error('Error al actualizar la presentación:', error);
    }
  };

  const handleDetailsSave = async (newDetails: { occupation: string; education: string[]; city: string; originCity: string; phone: string }) => {
    try {
      // Llamar a la mutación con los nuevos detalles del usuario
      const response = await updateBasicInfo({ info: newDetails }).unwrap();
      console.log('Detalles actualizados:', response);

      // Actualizar el estado local con los nuevos detalles
      setUserDetails(newDetails);
      setShowDetailsModal(false); // Cerrar el modal después de guardar
    } catch (error) {
      console.error('Error al actualizar los detalles:', error);
    }
  };

  return (
    <div className="user-details-panel p-4 bg-light rounded">
      <h5 className="fw-bold">Detalles</h5>

      {/* Mostrar la presentación actual */}
      <p>{presentation || 'No se ha definido ninguna presentación aún.'}</p>

      {/* Botón para abrir el modal de edición de la presentación */}
      <button
        className="btn btn-secondary mb-3"
        onClick={() => setShowPresentationModal(true)}
      >
        Editar presentación
      </button>

      {/* Modal para editar la presentación */}
      {showPresentationModal && (
        <EditPresentationModal
          show={showPresentationModal}
          onClose={() => setShowPresentationModal(false)} // Cerrar modal
          onSave={handlePresentationSave} // Guardar la nueva presentación
          currentPresentation={presentation} // Pasar la presentación actual al modal
        />
      )}

      {/* Botón para abrir el modal de edición de detalles */}


      {/* Modal para editar los detalles */}
      {showDetailsModal && (
        <EditDetailsModal
          show={showDetailsModal}
          onClose={() => setShowDetailsModal(false)} // Cerrar modal
          onSave={handleDetailsSave} // Guardar los nuevos detalles
          currentDetails={userDetails} // Pasar los detalles actuales al modal
        />
      )}

      {/* Código comentado conservado */}
      <InfoUserDetails
        selectedInfoSection={'Información general'}
      />
      <button
        className="btn btn-secondary mb-3"
        onClick={() => setShowDetailsModal(true)}
      >
        Editar detalles
      </button>
    </div>
  );
};
