# Instalação

```
npm install no terminal
```

Isso instalará todas as dependências necessárias, incluindo os `node_modules` e `package-lock.json`.

## Variáveis de Ambiente

Este projeto requer o uso de variáveis de ambiente para funcionar corretamente. Como o arquivo `.env` não está incluído no repositório por conter informações sensíveis, você precisará criá-lo manualmente e fornecer as variáveis necessárias.

1. Crie um arquivo `.env` no src do projeto.
2. Adicione as variáveis de ambiente necessárias no arquivo `.env` no formato TELEGRAM_TOKEN=''
   
Exemplo de `.env`:

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"

TELEGRAM_TOKEN="193138219"
```

Após definir as variáveis de ambiente no arquivo `.env`, seu projeto estará pronto para ser executado.
