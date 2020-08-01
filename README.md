# Introdução
Este projeto foi desenvolvido como método de avaliação utilizando o cypress.

### Ferramentas uilizadas

<https://www.cypress.io> <br>
<https://www.npmjs.com/package/mochawesome> <br>
https://www.npmjs.com/package/faker 


### Instalando ambiente


```sh
npm install
npm install faker
```

### Executando os testes

```sh
npx cypress run

ou

$(npm bin)/cypress run

ou
./node_modules/.bin/cypress open

```


### Gerando o relatório em HTML, utilizando o Mocha (OPCIONAL).

```sh
npx cypress run --reporter mochawesome
```
