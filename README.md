Projeto Final: API de Produtos Containerizada 🐳
Este projeto é uma API RESTful simples em Node.js para cadastro de produtos, focada em demonstrar conceitos de Computação em Nuvem como containerização, exposição de portas e volumes persistentes.

🚀 Tecnologias
Node.js & Express

Docker

Docker Volumes (Persistência no Host)

📋 Como Executar
1. Construir a Imagem
No terminal, dentro da pasta do projeto, execute o comando abaixo para criar a imagem:

Bash
docker build -t api-produtos .
2. Rodar o Container com Volume
Este comando mapeia a porta 3000 e conecta a pasta /data do container à pasta meus_dados no seu Windows (Host), garantindo que os dados não sejam perdidos ao desligar o container.

No Windows (PowerShell):

Bash
docker run -p 3000:3000 -v ${PWD}/meus_dados:/data api-produtos
🧪 Como Testar
Após rodar o container, você pode validar a aplicação:

Listar Produtos (Navegador):
Acesse: http://localhost:3000/produtos
Deverá retornar um array vazio [].

Verificar Persistência (Volume):
Ao salvar um produto, um arquivo chamado produtos.json será criado automaticamente na sua pasta local meus_dados
