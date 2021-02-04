import express from "express";
import exphbs from "express-handlebars";
import http from "http";
import path from "path";
import SocketIO from "socket.io";

const app = express();
const server: http.Server = http.createServer(app);

const port = 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const projects: string[] = ["project1", "project2", "project3", "project4", "project5", "project6", "project7", "project8"];

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.render("projects", {
        projects,
    });
});

app.get("/home", (req, res) => {
    res.render("projects", {
        projects,
    });
});

const socketHandler: SocketIO.Server = SocketIO(server);

socketHandler.on("connection", (socketConn: SocketIO.Socket) => {
    console.log("Socket connected to server!");

    socketConn.on("message", (data: any) => {
        console.log("Message sent from client to server: " + data);
    });
    socketConn.emit("hello", "Hello client you are connected");
});

server.listen(port, () => {
    console.log("express-handlebars server listening on: " + port);
});

// This should be executed from the client
/*import SocketIOClient from "socket.io-client";
const socket: SocketIOClient.Socket = SocketIOClient.connect("http://localhost:3000/");
socket.on("hello", () => {
    console.log("hello received");
    socket.emit("message", "Hello socket i am the client");
});*/
