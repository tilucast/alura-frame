<img src="img/Screenshot_1.png" align="center"></img>

<h1 align="center">Alura Frame</h1>
<p align="center">Projeto <strong>ES6+/MVC/OOP</strong></p>

<p align="center">
<img  src="https://img.shields.io/github/last-commit/tilucast/alura-frame?style=plastic"></img>
<img  src="https://img.shields.io/badge/ESLint-6.0.1-blue"></img>
</p>

# Instalação

Na pasta inicial , digite em sua cmd :

```
npm install
```

Esse comando irá instalar as dependências necessárias para rodar o projeto.
Faça o mesmo na pasta **/server**

Após concluído o download, abra sua cmd e digite:

```
npm start
```

Já este comando irá inicializar o servidor na porta **3000**. E é isso, abra em seu navegador **localhost:3000** e terá o projeto rodando em sua máquina.

Para fazer modificações no projeto, vá na pasta principal **(app-es6+)** e digite :

````
npm run watch
````
Esse comando irá fazer com que o babel 'observe' as modificações feitas na pasta **app-es6+** e transpile o código para a pasta app, que é a pasta que o navegador vai usar para rodar o projeto.


# Sobre o projeto

É o projeto do curso ES6+ da Alura.
Este projeto usa o modelo **MVC**, com **OOP**, além de muitas features novas do ES6+.

O guia deste projeto é : <a href="https://github.com/flaviohenriquealmeida">Flávio Henrique de Souza Almeida</a>.
Existem muitos intrutores nos fóruns da alura, mas este rapaz <a href="https://github.com/mahenrique94">Matheus Castiglioni</a> me ajudou bastante. Valeu !

# Modificações

Modifiquei basicamente o projeto inteiro.

# Observações

Existem códigos comentados em alguns arquivos. Esses códigos são de uma funcionalidade de exclusão única que eu tentei fazer. Não consegui. a documentação do IndexedDB da Mozilla é uma porcaria, então vou deixar comentado até que um dia eu consiga resolver. Entretanto, existe a opção de excluir individualmente as negociações do DOM e da referênca na array, exclusão essa que altera o valor total das negociações.

Existe um bug ao importar as negociações ao iniciar o servidor pela primeira vez já contendo negociações no IndexedDB. Esse bug acontece por que a função de filtrar as negociações só observa as negociações importadas, e caso já existam negociações no Index, o filtro vai permitir que as negociações sejam duplicadas.

