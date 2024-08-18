import express from 'express';
import cors from 'cors';
import { AppDataSource } from './config/ormconfig';
import noteRoutes from './routes/note.routes';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, 
}));

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

app.use('/notes', noteRoutes);

export default app;
