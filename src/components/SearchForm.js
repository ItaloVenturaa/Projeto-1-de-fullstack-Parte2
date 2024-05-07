import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; //biblioteca react-bootstrap
import { useSearch } from '../contexts/SearchContext';
import '../styles/styles.css';

function SearchForm() {
  const { handleSearch } = useSearch();
  const [agentInput, setAgentInput] = useState('');
  const [mapInput, setMapInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(null);
      handleSearch(agentInput, mapInput);
    } catch (error) {
      setError(error.message); 
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
      <br/> 
      {error && <p className="error">{error}</p>}
    </Form>
  );
}

export default SearchForm;
