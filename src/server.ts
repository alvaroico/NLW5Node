import express, { request, response } from "express";
import "reflect-metadata";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Servidor Rodando na porta 3333"));
