# Define a imagem base
FROM node:alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN yarn

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Define a porta que o container irá escutar
EXPOSE 3000

# Define o comando para iniciar o servidor
CMD [ "yarn", "client" ]
