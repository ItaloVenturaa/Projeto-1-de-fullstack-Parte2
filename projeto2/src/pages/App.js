import React, { useState, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; // Importe os componentes do React-Bootstrap necessários
import { validateSearchInput } from '../utils/validation'; 
import '../styles/styles.css';
import { fetchAgentInfo, fetchMapInfo, fetchAllAgents, fetchAllMaps } from '../services/api';

const SearchForm = React.lazy(() => import('../components/SearchForm'));
const Results = React.lazy(() => import('../components/Results'));
const ErrorMessage = React.lazy(() => import('../components/ErrorMessage'));

function App() {
  const [agentInfo, setAgentInfo] = useState(null);
  const [mapInfo, setMapInfo] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (agentTerm, mapTerm) => {
    try {
      if (!agentTerm && !mapTerm) {
        displayError('Campos vazios');
        return;
      }
  
      if (agentTerm && mapTerm) {
        validateSearchInput(agentTerm, mapTerm);
        displayError('Preencha apenas um dos campos: Agente ou Mapa.');
        return;
      }
  
      clearResults();
  
      if (!agentTerm && !mapTerm) {
        const agents = await fetchAllAgents();
        const maps = await fetchAllMaps();
        displayAllData(agents, maps);
      } else {
        if (agentTerm) {
          const agentData = await fetchAgentInfo(agentTerm);
          displayAgentInfo(agentData);
        }
        if (mapTerm) {
          const mapData = await fetchMapInfo(mapTerm);
          displayMapInfo(mapData);
        }
      }
    } catch (error) {
      console.error(error);
      displayError(error.message);
    }
  };
  

  const clearResults = () => {
    setAgentInfo(null);
    setMapInfo(null);
    setError('');
  };

  const displayAllData = (agents, maps) => {
    setAgentInfo(agents);
    setMapInfo(maps);
    setError('');
  };
  
  const displayAgentInfo = (agentData) => {
    setAgentInfo(agentData);
    setMapInfo(null);
  };

  const displayMapInfo = (mapData) => {
    setMapInfo(mapData);
    setAgentInfo(null);
  };

  const displayError = (message) => {
    setError(message);
    setAgentInfo(null);
    setMapInfo(null);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Pesquisa Valorant</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Suspense fallback={<div>Carregando</div>}>
            <SearchForm onSearch={handleSearch} />
            <Results agentInfo={agentInfo} mapInfo={mapInfo} error={error} />
            <ErrorMessage message={error} />
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
