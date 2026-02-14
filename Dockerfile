
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .
RUN mkdir /data
EXPOSE 3000
VOLUME ["/data"]
CMD ["node", "server.js"]
