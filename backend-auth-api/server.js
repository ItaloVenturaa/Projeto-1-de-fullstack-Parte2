const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123') {
    res.json({ token: 'admin-token', userType: 'admin' });
  } else if (username === 'user' && password === '123') {
    res.json({ token: 'user-token', userType: 'user' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

app.post('/selection', (req, res) => {
  res.json({ message: 'Seleção salva com sucesso!' });
});

app.get('/selections', (req, res) => {
  res.json({ selections: [{ agent: 'Phoenix', map: 'Haven' }] });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
