import React, { useState } from 'react';
import { Modal } from './Modal'; // Asumo que tienes un componente Modal ya definido

interface EditDetailsModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (details: any) => void; // Función que recibe los detalles actualizados
  currentDetails: {
    occupation: string;
    education: string[];
    city: string;
    originCity: string;
    phone: string;
  }; // Detalles actuales que se van a editar
}

export const EditDetailsModal: React.FC<EditDetailsModalProps> = ({ show, onClose, onSave, currentDetails }) => {
  const [occupation, setOccupation] = useState(currentDetails.occupation);
  const [education, setEducation] = useState(currentDetails.education || []);
  const [city, setCity] = useState(currentDetails.city);
  const [originCity, setOriginCity] = useState(currentDetails.originCity);
  const [phone, setPhone] = useState(currentDetails.phone);
  const [relationshipStatus, setRelationshipStatus] = useState(''); // Ejemplo de nuevo campo

  const handleSave = () => {
    onSave({ occupation, education, city, originCity, phone, relationshipStatus });
  };

  return (
    <Modal show={show} title="Editar Detalles" onClose={onClose} onSave={handleSave}>
      <div className="form-section">
        {/* Sección Empleo */}
        <h6>Empleo</h6>
        <div className="d-flex align-items-center mb-3">
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="form-control"
            placeholder="Agrega un lugar de trabajo"
          />
        </div>

        {/* Sección Formación Académica */}
        <h6>Formación Académica</h6>
        {education.map((edu, index) => (
          <div key={index} className="d-flex align-items-center mb-2">
            <input
              type="text"
              value={edu}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index] = e.target.value;
                setEducation(newEducation);
              }}
              className="form-control"
              placeholder="Agregar universidad o estudio"
            />
          </div>
        ))}
        <button
          className="btn btn-light mb-3"
          onClick={() => setEducation([...education, ''])}
        >
          + Agregar universidad
        </button>

        {/* Sección Ciudad Actual */}
        <h6>Ciudad Actual</h6>
        <div className="d-flex align-items-center mb-3">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            placeholder="Ciudad actual"
          />
        </div>

        {/* Sección Ciudad de Origen */}
        <h6>Ciudad de Origen</h6>
        <div className="d-flex align-items-center mb-3">
          <input
            type="text"
            value={originCity}
            onChange={(e) => setOriginCity(e.target.value)}
            className="form-control"
            placeholder="Ciudad de origen"
          />
        </div>

        {/* Sección Situación Sentimental */}
        <h6>Situación Sentimental</h6>
        <div className="d-flex align-items-center mb-3">
          <input
            type="text"
            value={relationshipStatus}
            onChange={(e) => setRelationshipStatus(e.target.value)}
            className="form-control"
            placeholder="Agregar situación sentimental"
          />
        </div>

        {/* Sección Teléfono */}
        <h6>Teléfono</h6>
        <div className="d-flex align-items-center mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            placeholder="Número de teléfono"
          />
        </div>
      </div>
    </Modal>
  );
};
