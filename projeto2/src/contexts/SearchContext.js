import React, { createContext, useState, useContext } from 'react';
import { fetchAgentInfo, fetchMapInfo, fetchAllAgents, fetchAllMaps } from '../services/api';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
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
    <SearchContext.Provider value={{ agentInfo, mapInfo, error, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

//hook 
export const useSearch = () => useContext(SearchContext);
