const express = require('express');
const app = express();
const porta = 1010;

const db = require('./models/db');
//aceitar json
app.use(express.json());

app.use(express.static('/pages/principal'));

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/pages/principal/index.html');
});

app.post('/login', async (req, res) => {
    res.send(__dirname + '/pages/login/login.html');
});
//requisição informações hotel

app.listen(porta, () => {
    console.log(`servidor rodando na url http://localhost:${porta}`);
});
