import { Connection, ConnectionOptions, createConnection, getConnectionOptions } from "typeorm";
import ContatoEntity from "../entities/ContatoEntity";

export default class TypeOrm {

  static Connection: Connection;

  static async init(callback: (connection: Connection) => void): Promise<void> {

    const connectionOptions: ConnectionOptions = await getConnectionOptions();

    this.Connection = await createConnection({
      ...connectionOptions,
      entities: [ContatoEntity]
    });

    callback(this.Connection);

  }

}
