import Sequelize, { Model } from 'sequelize';

export default class Contato extends Model {  
  static initialize(sequelize: Sequelize.Sequelize) {
    this.init(
      {
        nome: Sequelize.TEXT,
        celular: Sequelize.TEXT,
        telefone: Sequelize.TEXT,
        ativo: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate: any;
}
