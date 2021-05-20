import SocketIOClient from "socket.io-client";
const socket: SocketIOClient.Socket = SocketIOClient.connect("http://localhost:3000/");
socket.on("hello", () => {
    console.log("hello received");
    socket.emit("message", "Hello socket i am the client");
});