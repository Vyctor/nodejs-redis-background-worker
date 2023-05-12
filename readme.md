# Background Jobs using Node.js and Redis

Simulação de envio de e-mail e cadastro em banco de dados utilizando Node.js e fila do Redis, com a biblioteca Bull.

## Executando a aplicação

Para executar a aplicação, é necessário preencher o arquivo .env com as credenciais do Redis e do Mailtrap. Também é possível utilizar o Docker para executar o Redis e o Postgres. Para isso, basta executar o comando:

```bash
docker-compose up -d
```

Após isso, basta executar o comando:

```bash
npm run dev
```
