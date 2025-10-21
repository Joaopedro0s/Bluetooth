const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});

app.get('/status', (req, res) => {
    res.send('Olá, Mundo!');
});

app.post('/status', (req, res) => {
    const { bluetooth } = req.body;
    console.log('Status do Bluetooth:', bluetooth);
    res.json({recebido:bluetooth});
});