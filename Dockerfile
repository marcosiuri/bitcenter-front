# Usar a imagem oficial do Node.js
FROM node:16

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto
COPY package*.json ./
RUN npm install

# Instalar o Bootstrap e suas dependências
RUN npm install bootstrap @popperjs/core

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta que o Vue usa
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "run", "serve"]
