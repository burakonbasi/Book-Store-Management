
## Description

E-Adam firması için Kitap Mağazası Yönetimi uygulaması geliştirmeyi hedefliyorum.

## Technologies

Docker - PostgreSQL - NestJs - TypeScript
<br>
Docker container list [ NestJS - PostgreSQL - RabbitMQ ]

## Establishing the Working Environment

docker-compose up 
<br>
docker ps -a
<br>
NestJS  ports:
      - '3001:3000'
<br>
PostgreSQL ports:
      - '5433:5432'
<br>      
 RabbitMQ  ports:
      - '5672:5672'
      - '15672:15672'
           
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
