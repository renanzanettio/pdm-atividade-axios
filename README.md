# Consumo de API com Axios

Mantém a organização do projeto Expo de referência, com app/, assets/,
components/, constants/, hooks/ e styles/. A única tela é app/index.tsx.
app/_layout.tsx configura essa tela; styles/global.tsx contém seus estilos.
Não inclui as telas ou funcionalidades do TaskFlow.

A tela consulta https://jsonplaceholder.typicode.com/posts/1 com axios.get,
mostra title e body, exibe mensagem de carregamento e trata erros com try/catch.

## Executar

Com Node.js instalado, extraia o ZIP, abra o terminal em projeto-axios e execute:

    npm install
    npm start

Pressione w para abrir no navegador. Para celular, use ambiente Expo compatível
com SDK 54. É necessário acesso à internet.
