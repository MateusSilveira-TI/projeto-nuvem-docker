# Projeto Final: API de Produtos Containerizada 🐳

Este projeto simula uma API RESTful para cadastro de produtos, rodando em container Docker com persistência de dados em volumes.
Desenvolvido como requisito da disciplina de Computação em Nuvem.

## 📋 Como executar

### 1. Construir a Imagem
No terminal, dentro da pasta do projeto:
```bash
docker build -t api-produtos .

## No terminal roda o comando abaixo
docker run -p 3000:3000 -v $(pwd)/meus_dados:/data api-produtos


Como Testar
No Navegador 
Listar produtos: http://localhost:3000/produtos

