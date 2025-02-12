import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Container, Form, Button, Card } from 'react-bootstrap';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '24rem', padding: '20px', borderRadius: '10px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuário</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite seu usuário" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Digite sua senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;
