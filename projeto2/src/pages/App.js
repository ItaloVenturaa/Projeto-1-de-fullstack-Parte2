// App.js (React Frontend)
import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://sua-url-de-producao.com' 
  : ''; // Usará o proxy definido no package.json para desenvolvimento

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [userType, setUserType] = useState(null);
  const [agent, setAgent] = useState('');
  const [map, setMap] = useState('');
  const [selections, setSelections] = useState([]);
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { username, password });
      setToken(response.data.token);
      setUserType(response.data.userType);
      setMessage('Login realizado com sucesso!');
    } catch (error) {
      setMessage('Erro no login. Verifique suas credenciais.');
    }
  };

  const handleSelection = async () => {
    if (userType === 'user' && map) {
      setMessage('Usuário comum não pode selecionar mapas.');
      return;
    }
    try {
      await axios.post(`${BASE_URL}/selection`, { token, agent, map });
      setMessage('Seleção salva com sucesso!');
    } catch (error) {
      setMessage('Erro ao salvar a seleção.');
    }
  };

  const handleListSelections = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/selections`, { headers: { token } });
      setSelections(response.data.selections);
    } catch (error) {
      setMessage('Erro ao listar as seleções.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sistema de Seleção</h1>
      {!token ? (
        <div>
          <h2>Login</h2>
          <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Bem-vindo, {userType === 'admin' ? 'Admin' : 'Usuário Comum'}</h2>
          <div>
            <h3>Selecionar Agente e Mapa</h3>
            <input placeholder="Agente" value={agent} onChange={(e) => setAgent(e.target.value)} />
            <input placeholder="Mapa" value={map} onChange={(e) => setMap(e.target.value)} />
            <button onClick={handleSelection}>Salvar Seleção</button>
          </div>
          <div>
            <h3>Listar Seleções</h3>
            <button onClick={handleListSelections}>Listar</button>
            <ul>
              {selections.map((sel, index) => (
                <li key={index}>{`Agente: ${sel.agent}, Mapa: ${sel.map || 'N/A'}`}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}

export default App;
