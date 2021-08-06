import "reflect-metadata";
import express from 'express';
import fabricante from './routes/fabricante.routes';
import local from './routes/local.routes';
import predio from './routes/predio.routes';
import modelo from './routes/modelo.routes';
import equipamento from './routes/equipamento.routes';
import serial from './routes/serial.routes';
import printer from './routes/zpl.routes.js';

var cors = require('cors')
import './database';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/fabricante', fabricante);
app.use('/local', local);
app.use('/predio', predio);
app.use('/modelo', modelo);
app.use('/printer', printer);
app.use('/equipamento', equipamento);
app.use('/serial', serial);

app.listen(3333, ()=>{
  console.log('Server runing on port 3333'); 
})