# Introdução ao framework Nest.js

> Projeto elaborado à partir do dia 09 de março. O intuito do projeto é entendermos como funciona o conceitos de controllers, providers, modules, middleware, exception filters, pipes, guards e interceptors.

#### Roteiro para desenvolvimento

1. Escolha um local para criar a pasta raiz do projeto:

```js
cd <nome da pasta>
```

2. Instalar o Nest CLI:

```js
sudo npm i -g @nestjs/cli class-validator class-transformer
```

3. Selecionar o NPM como package manager.

4. Acessar a pasta criada pelo comando do Nest CLI:

```js
cd customer-app
```

5. Criar a interface Customer (responsável por guardar as informações do cliente):

```js
nest generate interface Customer
```

6. Criar a classe CustomerController (responsável por gerenciar endpoints):

```js
nest generate controller Customer
```

7. Criar a classe CustomerService (responsável por tratar as regras de negócio da aplicação):

```js
nest generate service Customer
```

8. Para rodar a aplicação:

```js
npm start
nest start
npm run start:dev
```

#### Roteiro para instalação

1. Clone o repositório em uma pasta da sua escolha:

```js
git clone git@github.com:EvyOliveira/Nest.js.git
```

2. Instale todas as dependências do projeto:

```js
npm install
```