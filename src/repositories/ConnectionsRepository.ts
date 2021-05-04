import { Repository } from "typeorm";
import { Connection } from "../entities/Connections";

class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository };
