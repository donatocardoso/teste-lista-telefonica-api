import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateContato20211005195437 implements MigrationInterface {
  
  async up(queryRunner: QueryRunner): Promise<void> {
    const table: Table = new Table({
      name: "contato_entity",
      columns: [
        {
          name: "Id",          
          isGenerated: true,
          isPrimary: true,
          type: "integer",
        },
        {
          name: "Nome",          
          type: "varchar",
        },
        {
          name: "Email",
          isNullable: true,
          type: "varchar",
        },
        {
          name: "Celular",
          isNullable: true,
          type: "varchar",
        },
        {
          name: "Telefone",
          isNullable: true,
          type: "varchar",
        },
        {
          name: "Ativo",          
          type: "bit",
          default: 1,
        },
        {
          name: "CreatedAt",          
          default: "NOW()",
          type: "date",
        },
        {
          name: "UpdatedAt",          
          default: "NOW()",
          type: "date",
        },
        {
          name: "DeletedAt",
          isNullable: true,
          type: "date",
        }
      ],
    });

    await queryRunner.createTable(table, true);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Contatos");
  }
};
