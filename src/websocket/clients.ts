import { io } from "../http";
import {ConnectionsService} from '../services/ConnectionsServices';

io.on("connect", (socket) => {
  socket.on("client_first_access", (params) => {
    console.log(params);
  });
});
49:30