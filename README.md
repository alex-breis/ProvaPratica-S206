# ProvaPratica-S206

Repositório para a entrega da prova prática de S206, utilizando as ferramentas Cypress e Karate para os testes de UI e API, respectivamente.

## Executando os testes de UI:

1. Clone esse repositório na sua máquina.

2. Instalar o Node por meio do link: https://nodejs.org/en/ 

3. Dentro da pasta 'teste_cypress' realize a instalação do Cypress por meio do terminal digitando o comando:

```
npm install cypress
```

4. Para executar os testes via terminal utilize o comando:

```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

### Gerar o relatório HTML com os resultados dos testes de UI:

1. Execute o comando abaixo para instalar as dependências necessárias:
```
npm i --save-dev cypress-mochawesome-reporter
```

2. Execute os testes via terminal utilizando o comando abaixo:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

## Executando os testes de API:

1. Clone esse repositório na sua máquina.

2. Baixe e configure o Maven por meio do link: https://maven.apache.org/

3. Na pasta 'teste_karate' execute o seguinte comando por meio do terminal:

```
mvn clean install
```

4. Para executar os testes via terminal utilize o comando:

```
mvn test –Dtest=ApiRunner
```

### Relatório HTML com os resultados dos testes de API:

O relatório HTML contendo os resultados é gerado automaticamente ao final da execução dos testes. Basta abrir o link mostrado no terminal no navegador para visualizá-lo.
