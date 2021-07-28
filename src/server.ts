import "reflect-metadata";
import express from 'express';
import fabricante from './routes/fabricante.routes';

import './database';

const app = express();

app.use(express.json());
app.use('/fabricante', fabricante);

app.listen(3333, ()=>{
  console.log('Server runing on port 3333'); 
})