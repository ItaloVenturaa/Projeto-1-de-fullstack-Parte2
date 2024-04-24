import React from 'react';

function Results({ agentInfo, mapInfo, }) {

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
