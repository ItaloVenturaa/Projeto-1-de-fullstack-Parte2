export function validateSearchInput(agentInput, mapInput) {
    if (agentInput && mapInput) {
        throw new Error('Preencha apenas um dos campos: Agente ou Mapa.');
    }
}
