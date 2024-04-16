# Instalação

```
npm install no terminal
```

Isso instalará todas as dependências necessárias, incluindo os `node_modules` e `package-lock.json`.

## Variáveis de Ambiente

Este projeto requer o uso de variáveis de ambiente para funcionar corretamente. Como o arquivo `.env` não está incluído no repositório por conter informações sensíveis, você precisará criá-lo manualmente e fornecer as variáveis necessárias.

1. Crie um arquivo `.env` no diretório raiz do seu projeto.
2. Adicione as variáveis de ambiente necessárias no arquivo `.env` no formato `NOME_DA_VARIAVEL=VALOR_DA_VARIAVEL`.
3. Não compartilhe informações sensíveis, como chaves de API, publicamente.

Exemplo de `.env`:

```
PORT=3000
API_KEY=suachaveapi
```

Após definir as variáveis de ambiente no arquivo `.env`, seu projeto estará pronto para ser executado.
