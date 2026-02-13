const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const DATA_FILE = '/data/produtos.json'; // Caminho onde o volume será montado

app.use(express.json());

// Função auxiliar para ler o arquivo
const lerDados = () => {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
};

// Rota GET: Listar produtos
app.get('/produtos', (req, res) => {
    const produtos = lerDados();
    res.json(produtos);
});

// Rota POST: Adicionar produto
app.post('/produtos', (req, res) => {
    const produtos = lerDados();
    const novoProduto = { id: Date.now(), ...req.body };
    produtos.push(novoProduto);
    
    // Salva no arquivo (simulando persistência)
    fs.writeFileSync(DATA_FILE, JSON.stringify(produtos, null, 2));
    
    res.status(201).json(novoProduto);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});