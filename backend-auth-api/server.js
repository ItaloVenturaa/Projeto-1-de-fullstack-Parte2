const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const verifyToken = require('./middleware/authMiddleware'); // Middleware de autenticação

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = 'seu_segredo_super_secreto';
const DATA_FILE = path.join(__dirname, 'data.json');


const readData = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const { users } = readData();

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Usuário ou senha inválidos!' });
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token, username: user.username });
});


app.get('/search', verifyToken, (req, res) => {
  const { data } = readData();
  res.json({ results: data });
});

app.post('/insert', verifyToken, (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: 'Nome e descrição são obrigatórios!' });
  }

  const database = readData();
  const newItem = { id: database.data.length + 1, name, description };
  database.data.push(newItem);

  fs.writeFileSync(DATA_FILE, JSON.stringify(database, null, 2));
  res.json({ message: 'Dado inserido com sucesso!', item: newItem });
});


app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
