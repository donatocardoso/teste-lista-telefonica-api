# TOKI TOKI NO MI

## Como usar

```shell
yarn && yarn dev
```

## ORM

### Sequelize

O ORM de conexão com o Banco de Dados é o Sequelize, para utilizar de suas ferramentas é necessário a intalação das seguintes bibliotecas:

```shell
yarn global add sequelize-cli-typescript

yarn add sequelize sequelize-typescript

yarn add --dev @types/sequelize
```

### Migrations

Para criação de migrations utilize o comando:

```shell
sequelize migration:generate --name Model
```

### Seeds
