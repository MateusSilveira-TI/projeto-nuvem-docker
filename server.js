const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const DATA_FILE = '/data/produtos.json';

app.use(express.json());

const lerDados = () => {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
};
app.get('/produtos', (req, res) => {
    const produtos = lerDados();
    res.json(produtos);
});

app.post('/produtos', (req, res) => {
    const produtos = lerDados();
    const novoProduto = { id: Date.now(), ...req.body };
    produtos.push(novoProduto);
   
    fs.writeFileSync(DATA_FILE, JSON.stringify(produtos, null, 2));
    
    res.status(201).json(novoProduto);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
