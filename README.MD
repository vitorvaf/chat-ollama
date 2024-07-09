# Chat com Ollama

Este é um projeto simples de chat que integra com a API do Ollama para gerar respostas automáticas. O projeto utiliza Node.js para o backend e HTML/CSS/JavaScript para o frontend.

## Pré-requisitos

Antes de começar, você precisará ter os seguintes softwares instalados:

- Node.js: [Instalação do Node.js](https://nodejs.org/)
- Ollama: [Instalação do Ollama](https://ollama.com/) (certifique-se de seguir as instruções para configurar o servidor local da API)

## Instalação

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/chat-com-ollama.git
    cd chat-com-ollama
    ```

2. Instale as dependências do Node.js:

    ```bash
    npm install
    ```

3. Certifique-se de que o servidor da API do Ollama está rodando localmente. Para iniciar o servidor do Ollama, siga as instruções da documentação do Ollama.

4. Inicie o servidor Node.js:

    ```bash
    node server.js
    ```

5. Abra o navegador e acesse a URL:

    ```arduino
    http://localhost:3000
    ```

## Uso

1. Digite uma mensagem no campo de texto.
2. Clique no botão "Enviar".
3. Aguarde a resposta do bot Ollama aparecer no chat.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```java
chat-com-ollama/
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

- public/index.html: Arquivo HTML do frontend.
- server.js: Servidor Node.js que lida com as requisições e integra com a API do Ollama.
- package.json: Gerenciador de dependências do Node.js.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript no lado do servidor.
- Express: Framework web para Node.js.
- Axios: Cliente HTTP baseado em promessas para o Node.js.
- HTML/CSS/JavaScript: Linguagens de marcação e script para o frontend.
- Ollama API: API para gerar respostas automáticas no chat.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.
Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
