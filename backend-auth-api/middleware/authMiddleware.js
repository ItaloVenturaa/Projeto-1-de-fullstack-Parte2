const jwt = require('jsonwebtoken');

const SECRET_KEY = 'seu_segredo_super_secreto'; // Use uma chave mais segura no .env

// Middleware para verificar o token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado! Token não fornecido.' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido ou expirado!' });
    }
    req.user = decoded; // Adiciona os dados do usuário na requisição
    next(); // Permite que a requisição continue
  });
};

module.exports = verifyToken;
