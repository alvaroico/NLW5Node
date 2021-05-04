import express, { response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "reflect-metadata";
import "./database";
import { routes } from "./routes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

const http = createServer(app); // Criando Protocolo HTTP
const io = new Server(http); //Criando Protocolo WebSocket

io.on("connection", (socket: Socket) => {
  // console.log("Se Conectou", socket.id);
});

app.use(express.json());
app.use(routes);

export { http, io };
