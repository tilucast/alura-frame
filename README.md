<img src="img/Screenshot_1.png" align="center"></img>

<h1 align="center">Alura Frame</h1>
<p align="center">Projeto <strong>ES6+/MVC/OOP</strong></p>

<p align="center">
<img  src="https://img.shields.io/github/last-commit/tilucast/alura-frame?style=plastic"></img>
<img  src="https://img.shields.io/badge/ESLint-6.0.1-blue"></img>
</p>

# Instalação

Baixe os arquivos, entre na pasta **server** e execute em sua cmd:

```
npm install
```

Esse comando irá instalar as dependências necessárias para rodar o servidor.
Após concluído o download, abra sua cmd e digite:

```
npm start
```

Já este comando irá inicializar o servidor na porta **3000**. E é isso, abra em seu navegador **localhost:3000** e terá o projeto rodando em sua máquina.

Entretanto, estou usando uma configuração do <a href="https://eslint.org/">ESLint</a> com o <a href="https://prettier.io/">Prettier</a>; configuração esta feita pelo desenvolvedor <a href="https://github.com/wesbos">wesbos</a>.
Link do repositório explicando como usar essa configuração:
<a href="https://github.com/wesbos/eslint-config-wesbos">No-Sweat™ Eslint and Prettier Setup - with or without VS Code</a>.

# Sobre o projeto

É o projeto do curso ES6+ da Alura.
Este projeto usa o modelo **MVC**, com **OOP**, além de muitas features novas do ES6+.

O guia deste projeto é : <a href="https://github.com/flaviohenriquealmeida">Flávio Henrique de Souza Almeida</a>.

# Modificações

Não são muitas, porém dentre elas:

<li>Modifiquei a forma como chamamos o listener do formulário. No projeto original, o guia chama o listener pelo HTML, já aqui eu chamo pelo próprio Javascript. (Preferência minha!)</li>
<li>Algumas modificações em estilização.</li>
<li>Adicionei um método que remove a notificação de negociação adicionada com sucesso.</li>
<li>Algumas modificações menores foram feitas, como trocar .then e .catch por async/await.</li>
<li>Visto que o curso foi dividido em 3 partes, (a segunda parte já está upada) . Assim que eu fizer a última parte, vou commita-la neste repositório, junto com minhas modificações.</li>
