import { DataSource } from 'typeorm';
import { Notes } from '../entities/Notes';
require('dotenv').config();


export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Notes],
  synchronize: false,
  migrations: ["src/migrations/*.ts"],
  ssl: {
    rejectUnauthorized: false, 
  },
});
