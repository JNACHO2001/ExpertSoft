import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.js';

const app = express();



app.use(express.json());

app.use('/api/users', usersRoutes);

