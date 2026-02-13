# 1. Imagem Oficial (Node.js versão leve)
FROM node:18-alpine

# 2. Diretório de trabalho
WORKDIR /app

# 3. Copia os arquivos de dependência e instala
COPY package.json .
RUN npm install

# 4. Copia o restante do código
COPY . .

# 5. Cria o diretório para o volume persistente
RUN mkdir /data

# 6. Expõe a porta simulada
EXPOSE 3000

# 7. Define o volume (Isso avisa ao Docker que essa pasta é especial)
VOLUME ["/data"]

# 8. Comando de inicialização
CMD ["node", "server.js"]