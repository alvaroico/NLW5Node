import { http } from "./http";
import "./websocket/clients"

http.listen(3333, () => console.log("Servidor Rodando na porta 3333"));
