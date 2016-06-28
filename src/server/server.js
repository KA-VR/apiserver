import express from 'express';
import bodyParser from 'body-parser';
import indexRoutes from './routes';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(indexRoutes);

app.listen(PORT);
