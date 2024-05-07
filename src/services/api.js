const API_URL = 'https://valorant-api.com/v1/';

async function fetchAgentInfo(agentName) {
    const response = await fetch(API_URL + 'agents?name=' + agentName);
    const data = await response.json();

    if (data.status !== 200) {
        throw new Error('Agente não encontrado.');
    }

    const agentData = data.data.find(agent => agent.displayName.toLowerCase() === agentName.toLowerCase());

    if (!agentData) {
        throw new Error('Agente não encontrado.');
    }

    return agentData;
}

async function fetchMapInfo(mapName) {
    const response = await fetch(API_URL + 'maps?name=' + mapName);
    const data = await response.json();

    if (data.status !== 200) {
        throw new Error('Mapa não encontrado.');
    }

    const mapData = data.data.find(map => map.displayName.toLowerCase() === mapName.toLowerCase());

    if (!mapData) {
        throw new Error('Mapa não encontrado.');
    }

    return mapData;
}

async function fetchAllAgents() {
    const response = await fetch(API_URL + 'agents');
    const data = await response.json();

    if (data.status !== 200) {
        throw new Error('Erro ao obter a lista de agentes.');
    }

    return data.data;
}

async function fetchAllMaps() {
    const response = await fetch(API_URL + 'maps');
    const data = await response.json();

    if (data.status !== 200) {
        throw new Error('Erro ao obter a lista de mapas.');
    }

    return data.data;
}



export { fetchAgentInfo, fetchMapInfo, fetchAllAgents, fetchAllMaps };

