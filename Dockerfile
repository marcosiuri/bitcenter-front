# Usar a imagem oficial do Node.js
FROM node:16

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto
COPY package*.json ./
RUN npm install

COPY . .

# Expor a porta que o Vue usa
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "run", "serve"]
