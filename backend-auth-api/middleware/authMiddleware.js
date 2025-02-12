const jwt = require('jsonwebtoken');

const SECRET_KEY = 'seu_segredo_super_secreto'; 


const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado! Token não fornecido.' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido ou expirado!' });
    }
    req.user = decoded; 
    next(); 
  });
};

module.exports = verifyToken;
