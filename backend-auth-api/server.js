const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const verifyToken = require('./middleware/authMiddleware'); 

dotenv.config(); // Carrega variáveis do .env

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = 'seu_segredo_super_secreto';


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("🟢 Conectado ao MongoDB"))
.catch(err => console.error("🔴 Erro ao conectar:", err));


const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String
}));

const Data = mongoose.model('Data', new mongoose.Schema({
  name: String,
  description: String
}));


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: 'Usuário ou senha inválidos!' });
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token, username: user.username });
});

app.get('/search', verifyToken, async (req, res) => {
  const results = await Data.find(); 
  res.json({ results });
});


app.post('/insert', verifyToken, async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: 'Nome e descrição são obrigatórios!' });
  }

  const newItem = new Data({ name, description });
  await newItem.save(); 

  res.json({ message: 'Dado inserido com sucesso!', item: newItem });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
