import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import TypeOrm from "../connections/TypeOrm";
import ContatoEntity from "../entities/ContatoEntity";

export class AddContatosIniciais20211007122134 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<void> {
    const Contato = getRepository(ContatoEntity);

    Contato.save({
      Nome: "John Doe",
      Email: "john.doe@gmail.com",
      Celular: "",
      Telefone: ""
    });

    Contato.save({
      Nome: "David Wilson",
      Email: "david.wilson@gmail.com",
      Celular: "+55 16 9 63489-6648",
      Telefone: ""
    });

    Contato.save({
      Nome: "Mary Jane",
      Email: "mary.jane@gmail.com",
      Celular: "",
      Telefone: "+55 16 9 9024-6196"
    });

    Contato.save({
      Nome: "Peter Parker",
      Email: "peter.parker@gmail.com",
      Celular: "+55 16 9 4732-3015",
      Telefone: "+55 16 9 6348-9839"
    });
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await TypeOrm.init(async (conn) => {
      const Contato = conn.getRepository(ContatoEntity);

      await Contato.clear();
    });
  }

};
