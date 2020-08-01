# Introdução
Este projeto foi desenvolvido como método de avaliação utilizando o cypress.

### Ferramentas uilizadas

<https://www.cypress.io> <br>
<https://www.npmjs.com/package/mochawesome> <br>


### Configuração do ambiente


```sh
cd mEnvio
npm install
```

### Executando os testes

```sh
./node_modules/.bin/cypress open

ou

$(npm bin)/cypress run

ou

npx cypress run
```


### Gerando o relatório em HTML, utilizando o Mocha (OPCIONAL).

```sh
npx cypress run --reporter mochawesome
```
