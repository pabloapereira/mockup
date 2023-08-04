const express = require('express');
const app = express();
const porta = 1010;

const User = require('./models/User');

const db = require('./models/db');
//aceitar json
app.use(express.json());

app.use(express.static('/pages/principal'));

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/pages/principal/index.html');
});

app.post('/cadastro', async (req, res) => {
    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: 'Sucesso no cadastro!'
        });
    }).catch(() => {
        return res.status(400).json({
            erro: false,
            mensagem: 'Erro no cadastro'
        });
    });
    //res.send(__dirname + '/pages/login/login.html');
});

app.get('/login',async (req, res) => {
    res.sendFile(__dirname + '/pages/login/login.html');
});
//requisição informações hotel

app.listen(porta, () => {
    console.log(`servidor rodando na url http://localhost:${porta}`);
});
