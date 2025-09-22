# --- ESTÁGIO 1: O Ambiente de Build ---
# Usamos uma imagem oficial do Node.js para compilar o projeto React
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de gerenciamento de pacotes
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o resto do código-fonte do seu projeto
COPY . .

# Executa o comando de build que você usa no seu script
RUN npm run build

# --- ESTÁGIO 2: O Ambiente de Produção ---
# Usamos uma imagem super leve do Nginx para servir os arquivos
FROM nginx:1.25-alpine

# Copia os arquivos estáticos gerados no estágio de build (da pasta /app/build)
# para a pasta padrão do Nginx que serve conteúdo na web.
COPY --from=builder /app/build /usr/share/nginx/html

# Copia nossa configuração customizada do Nginx (próximo arquivo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80
