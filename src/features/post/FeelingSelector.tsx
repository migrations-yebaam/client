import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

interface FeelingSelectorProps {
  show: boolean;
  onHide: () => void;
  onSelectFeeling: (feeling: string) => void; // Callback para seleccionar un sentimiento
}

const FeelingSelector: React.FC<FeelingSelectorProps> = ({ show, onHide, onSelectFeeling }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const feelings = [
    { emoji: '😊', label: 'feliz' },
    { emoji: '😍', label: 'amado' },
    { emoji: '😉', label: 'encantador' },
    { emoji: '😎', label: 'entusiasmado' },
    { emoji: '😜', label: 'loco' },
    { emoji: '😁', label: 'dichoso' },
    { emoji: '😇', label: 'bendecido' },
    { emoji: '😢', label: 'triste' },
    { emoji: '😂', label: 'agradecido' },
    { emoji: '😻', label: 'enamorado' },
    { emoji: '😌', label: 'complicado' },
    { emoji: '🎉', label: 'fantástico' },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredFeelings = feelings.filter(f =>
    f.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>¿Cómo te sientes?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="sentimientos" id="feeling-selector-tabs">
          <Tab eventKey="sentimientos" title="Sentimientos">
            <Form.Group controlId="feelingSearch">
              <Form.Control
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={handleSearch}
              />
            </Form.Group>
            <div className="feeling-results mt-3">
              {filteredFeelings.map((f, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center mb-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onSelectFeeling(f.label)}
                >
                  <span style={{ fontSize: '24px' }}>{f.emoji}</span>
                  <span className="ml-2">{f.label}</span>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="actividades" title="Actividades">
            {/* Puedes agregar una lógica similar para actividades */}
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default FeelingSelector;
