import express from 'express';
import exphbs from 'express-handlebars';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';

const app = express();
var server:http.Server = http.createServer(app);
const sockethandler:socketio.Server = socketio(server)

const port = 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const projects:Array<string> = ['pr1','pr2','pr3','pr4','pr5','pr6','pr7','pr8'];

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    res.render('projects',{
        projects: projects
    });
});

app.get('/home', function (req, res) {
    res.render('projects',{
        projects: projects
    });
});

server.listen(port, function () {
    console.log('express-handlebars server listening on: ' + port);
});


