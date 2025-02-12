import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(username, password);
    navigate('/search'); 
  };

  return (
    <div>
      <h2>Login</h2>
      {!user ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      ) : (
        <div>
          <p>Bem-vindo, {user}!</p>
          <button onClick={logout}>Sair</button>
        </div>
      )}
    </div>
  );
};

export default Login;
