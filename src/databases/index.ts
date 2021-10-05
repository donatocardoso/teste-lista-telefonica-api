import { Sequelize } from 'sequelize';
import database from '../configs/database';
import Contato from '../models/contato';

const models = [Contato];

export default class SequelizeConnection {
  connection: Sequelize;

  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(database);

    models
      .map((model) => model.initialize(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}
