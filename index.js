import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Routes);

const PORT = 8000;
Connection();
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
