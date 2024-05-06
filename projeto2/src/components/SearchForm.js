import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../styles/styles.css';

function SearchForm({ onSearch }) {
  const [agentInput, setAgentInput] = useState('');
  const [mapInput, setMapInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(null); 
      if (agentInput && mapInput) {
        throw new Error('Preencha apenas um dos campos: Agente ou Mapa.');
      }
      onSearch(agentInput, mapInput);
    } catch (error) {
      setError(error); 
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="agentInput">
        <Form.Label>Pesquisar Agente:</Form.Label>
        <Form.Control
          type="text"
          value={agentInput}
          onChange={(e) => setAgentInput(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="mapInput">
        <Form.Label>Pesquisar Mapa:</Form.Label>
        <Form.Control
          type="text"
          value={mapInput}
          onChange={(e) => setMapInput(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Pesquisar
      </Button>
      {error && <Alert variant="danger">{error.message}</Alert>}
    </Form>
  );
}

export default SearchForm;
