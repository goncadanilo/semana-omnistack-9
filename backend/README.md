# Semana Omnistack 9 - Rocketseat
Backend da aplicação desenvolvida durante a Semana OminiStack 9 da Rocketseat usando NodeJS

Descrição
-----

A proposta desse projeto foi criar uma "versão" do Airbnb para desenvolvedores chamada de **Aircnc**, onde os devs podem reservar spots(locais de trabalho) em empresas. Tudo isso usando o **NodeJS** no backend, **ReactJS** no frontend e **React Native** no mobile.

Instalação
-----

* **Pre-requisitos:** Antes de todo, para rodar esse projeto é necessario que você já tenha o [node js](https://nodejs.org/en/), e o [yarn](https://yarnpkg.com/pt-BR/) instalados.

* **Clone:** Para clonar o repositório use o seguinte comando.
```
git clone https://github.com/goncadanilo/omnistack-9-backend.git
```

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
