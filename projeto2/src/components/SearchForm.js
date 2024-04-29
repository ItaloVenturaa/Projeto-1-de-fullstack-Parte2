import React, { useState } from 'react';
import '../styles/styles.css';

function SearchForm({ onSearch, displayError }) {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="agentInput">Pesquisar Agente:</label>
      <input
        type="text"
        id="agentInput"
        value={agentInput}
        onChange={(e) => setAgentInput(e.target.value)}
      />
      <label htmlFor="mapInput">Pesquisar Mapa:</label>
      <input
        type="text"
        id="mapInput"
        value={mapInput}
        onChange={(e) => setMapInput(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
      {error && <p className="error">{error.message}</p>}
    </form>
  );
}

export default SearchForm;
