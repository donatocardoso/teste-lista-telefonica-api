import { Options } from 'sequelize';
import databases from './databases.json';

const env: string = process.env.NODE_ENV ?? 'development';
const database: any = {...databases}[env];

const config: Options = {
  dialect: database.dialect,
  host: database.host,
  username: database.username,
  password: database.password,
  database: database.database,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: true,
  logQueryParameters: false
};

export default config;
