const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const usuarios = [];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.json(usuario);
});

app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const novoUsuario = req.body;
  usuarios[id] = novoUsuario;
  res.json(novoUsuario);
});

app.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  usuarios.splice(id, 1);
  res.json({ message: 'Usuário removido.' });
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000.');
});