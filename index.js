import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/events.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/events', usersRoutes);
app.get('/', (req, res) => res.send('hello'));

app.listen(PORT, () => console.log('server is running'));