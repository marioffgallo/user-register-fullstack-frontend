# User Register Fullstack - Frontend
Projeto Frontend feito em Angular de uma página que registra usuários, lista e edita suas informações se comunicando com um Backend em Java e banco de dados MySQL.

# Gerar imagem no Docker

Gerar a imagem com o comando:

docker build -t user-register-fullstack-frontend .

Depois integrar o container no network do MySQL e utilizar a porta 4200:80 para executar o container. O comando abaixo executa tudo isso de uma vez:

docker run --network springboot-mysql-net --name user-register-frontend -p 4200:80 user-register-fullstack-frontend

# UserRegisterFullstackFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
