# Node Typescript-Handlebars Express template

## Description

Simple template repo for building quick and small web applications with NodeJS, typescript and express.
Uses handlebars as the tempate engine.  
Prefect for rapid prototyping a web application, with simple frontend.
(Very lightweight, if you build something bigger use Vue.js or React, if
it is there to last Angular might be the right thing).  

Has mocha as a testing framework.  
Uses nodemon and the watch mode of the typescript compiler to recompile and
restart the application as soon as changes (to the .ts files) occur.  

## Dependecies

Might require typescript & tsc to be globally installed as well:

```bash
npm install -g typescript
```

Has some pre defined **dependencies**:  
**Express** as the server framework for nodejs  
**Socket.IO** to provide socket based communication  
**node-fetch** to provide a simple http client (as development for request was stopped)  
**pm2** for starting the application in production  

## How to run

### Development

Install development and prod dependencies:  

```bash
npm install
```

Run applcation in development mode (recompiles sources and restarts if typescript files change):  

```bash
npm start
```

### Testing

Run mocha tests:

```bash
npm test
```

### Production

Install production dependecies only (-> no devdependencies):  

```bash
npm run prod:install
```

Build the typescript sources in production mode + set process.env.NODE_ENV="production"  
(-> no devdependencies):  

```bash
npm run prod:build
```

Run on production using pm2  

```bash
npm run prod:start
```

Stop the application with pm2  

```bash
npm run prod:stop
```

#### If you like the template consider dropping me a coffee

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/donate?hosted_button_id=BSFX8LCPHW2AE)
  
<br>  
<br>  