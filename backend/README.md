# Semana Omnistack 9 - Rocketseat
Backend da aplicação desenvolvida durante a Semana OminiStack 9 da Rocketseat usando NodeJS

Instalação
-----

* **Pre-requisitos:** Antes de todo, para rodar esse projeto é necessario que você já tenha o [node js](https://nodejs.org/en/), e o [yarn](https://yarnpkg.com/pt-BR/) instalados.


* **Dependências:** Para instalar as dependências, entre na pasta do projeto e use o seguinte comando.
```
yarn install

##ou apenas##

yarn
```

* **Configurações:** Ainda na pasta do projeto, crie um arquivo com o nome `.env` na raiz. Esse arquivo guardará a string de conexão com o banco de dados. Nesse projeto foi usado o [MongoDB](https://www.mongodb.com/). Esse arquivo deve conter o seguinte código:
```javascript
BD_URI=<sua string de conexão>
```
* **Rodar o Projeto:** Se você seguiu os outros passos, agora já consegue rodar o projeto sem nenhum problema. Para isso use o seguinte comando.
```
yarn start
```

Se tudo der certo o projeto irá rodar na porta 3333.
