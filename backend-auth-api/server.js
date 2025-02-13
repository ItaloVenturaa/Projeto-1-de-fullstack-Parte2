const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const { protect } = require('./middleware/authMiddleware');
const bcrypt = require('bcryptjs');
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


const User = require('./models/User');
const Data = require('./models/Data');


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Usuário ou senha inválidos!' });
  }

  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token, username: user.username });
});

app.get('/search', (req, res, next) => {
  console.log('Middleware test passou');
  next();
}, async (req, res) => {
  const results = await Data.find();
  res.json({ results });
});


app.post('/insert', async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: 'Nome e descrição são obrigatórios!' });
  }

  const newItem = new Data({ name, description });
  await newItem.save();

  res.json({ message: 'Dado inserido com sucesso!', item: newItem });
});

// Rota para listar todos os itens
app.get('/list', protect, async (req, res) => {
  try {
    const items = await Data.find(); // Obtém todos os itens da coleção 'Data'
    res.json({ items }); // Retorna os itens
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar os itens', error: err.message });
  }
});


app.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  // Verifica se o usuário já existe
  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: 'Usuário já existe!' });
  }

  // Cria um novo usuário
  const newUser = new User({
    username,
    password,
    role
  });

  try {
    // Salva o novo usuário no banco de dados
    await newUser.save();
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar usuário', error: err.message });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
