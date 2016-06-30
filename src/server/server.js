import express from 'express';
import bodyParser from 'body-parser';
import indexRoutes from './routes';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();
app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(indexRoutes);

app.listen(PORT);
