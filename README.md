# User Register Fullstack - Frontend
Projeto Frontend feito em Angular 11 de uma página que registra usuários, lista e edita suas informações se comunicando com um Backend em Java e banco de dados MySQL.

# Gerar imagem no Docker

Gerar a imagem com o comando:

docker build -t user-register-fullstack-frontend .

Depois integrar o container no network do MySQL e utilizar a porta 4200:80 para executar o container. O comando abaixo executa tudo isso de uma vez:

docker run --network springboot-mysql-net --name user-register-frontend -p 4200:80 user-register-fullstack-frontend
