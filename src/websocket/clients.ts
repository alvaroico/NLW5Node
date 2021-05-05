import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsServices";
import { UsersService } from "../services/UsersService";

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();

  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;

    const { text, email } = params;

    const userExists = await usersService.create(email);

    if (!userExists) {
      const user = await usersService.create(email);
      await connectionsService.create({
        socket_id,
        user_id: user.id,
      });
    } else {
      await connectionsService.create({
        socket_id,
        user_id: userExists.id,
      });
    }
  });
});
