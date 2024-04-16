# Instalação

```
npm install no terminal
```

Isso instalará todas as dependências necessárias, incluindo os `node_modules` e `package-lock.json`.

## Variáveis de Ambiente

Este projeto requer o uso de variáveis de ambiente para funcionar corretamente. Como o arquivo `.env` não está incluído no repositório por conter informações sensíveis, você precisará criá-lo manualmente e fornecer as variáveis necessárias.

1. Crie um arquivo `.env` no src do projeto.
2. Adicione as variáveis de ambiente necessárias no arquivo `.env` no formato TELEGRAM_TOKEN='  ' e DATABASE_URL="file:./dev.db" 
   
Exemplo de `.env`:

```

DATABASE_URL="file:./dev.db"

TELEGRAM_TOKEN="193138219"
```

Após definir as variáveis de ambiente no arquivo `.env`, seu projeto estará pronto para ser executado.  

E crie uma na pasta prisma contendo:

```
DATABASE_URL="file:./dev.db"
```
