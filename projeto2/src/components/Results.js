import React from 'react';

function Results({ agentInfo, mapInfo }) {
  if (Array.isArray(agentInfo) && Array.isArray(mapInfo)) {
    return (
      <div>
        {mapInfo.map((map) => (
          <div key={map.displayName}>
            <h2>{map.displayName}</h2>
            <p>{map.narrativeDescription}</p>
            <img src={map.splash} alt={map.displayName} />
          </div>
        ))}
        {agentInfo.map((agent) => (
          <div key={agent.displayName}>
            <h2>{agent.displayName}</h2>
            <p>{agent.description}</p>
            <img src={agent.bustPortrait} alt={agent.displayName} />
          </div>
        ))}
      </div>
    );
  }

  if (agentInfo) {
    return (
      <div>
        <h2>{agentInfo.displayName}</h2>
        <p>{agentInfo.description}</p>
        <img src={agentInfo.bustPortrait} alt={agentInfo.displayName} />
      </div>
    );
  }

  if (mapInfo) {
    return (
      <div>
        <h2>{mapInfo.displayName}</h2>
        <p>{mapInfo.narrativeDescription}</p>
        <img src={mapInfo.splash} alt={mapInfo.displayName} />
      </div>
    );
  }

  return null;
}

export default Results;
