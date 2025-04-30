FROM node:22-alpine
#RUNTIME do programa

WORKDIR /app
#pasta que será gerada para trabalhar em cima

RUN npm i -g json-server@0.17.4
#pacote que irá ser necessario para a aplicação rodar

COPY ./bd.json .
#conteudo que será jogado para a pasta app

EXPOSE 3000
#container irá rodar na porta 4000

ENTRYPOINT json-server --watch bd.json --host 0.0.0.0 --port 3000
#comando principal que será executado quando o container ser criado a partir da imagem

