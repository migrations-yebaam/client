/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface GifSelectorProps {
  show: boolean;
  onHide: () => void;
  onSelectGif: (gifUrl: string) => void; // Callback para seleccionar un GIF
}

const GifSelector: React.FC<GifSelectorProps> = ({ show, onHide, onSelectGif }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifResults, setGifResults] = useState<string[]>([
    'path-to-gif1.gif',
    'path-to-gif2.gif',
    // Otros GIFs de ejemplo o provenientes de una API
  ]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Aquí se implementaría la lógica de búsqueda real
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Elegir un GIF</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="gifSearch">
          <Form.Control
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
        <div className="gif-results mt-3">
          {gifResults.map((gifUrl, index) => (
            <img
              key={index}
              src={gifUrl}
              alt="Gif"
              className="img-fluid mb-2"
              style={{ cursor: 'pointer' }}
              onClick={() => onSelectGif(gifUrl)}
            />
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default GifSelector;
