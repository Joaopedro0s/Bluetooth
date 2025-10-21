const express = require('express');
const cors = require('cors'); // importe o cors

const app = express();
const port = 3000;

app.use(cors()); // habilita CORS para todas as rotas

app.use(express.json());

app.get('/status', (req, res) => {
  res.send('Servidor está funcionando!');
});

app.post('/status', (req, res) => {
  const { bluetooth } = req.body;
  if (bluetooth) {
    console.log('Status do Bluetooth recebido:', bluetooth);
    res.json({ recebido: bluetooth });
  } else {
    res.status(400).json({ erro: 'Campo "bluetooth" ausente' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
