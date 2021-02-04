# Node Typescript-Handlebars Express template

Simple template repo for building quick and small web applications with NodeJS, typescript and express.
Uses handlebars as the tempate engine.  
Prefect for rapid prototyping a web application, with simple frontend.
(Very lightweight, if you build something bigger use Vue.js or React, if
it is there to last Angular might be the right thing).  

Has mocha as a testing framework.  
Uses nodemon and the watch mode of the typescript compiler to recompile and
restart the application as soon as changes (to the .ts files) occur.  

Might require typescript & tsc to be globally installed as well:

```bash
npm install -g typescript
```

Has some pre defined dependencies:
**Express** as the server framework for nodejs
**Socket.IO** to provide socket based communication
**node-fetch** to provide a simple http client (as development for request was stopped)
**pm2** for starting the application in production
