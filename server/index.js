import express from 'express';
import config from './config/config.js';

const app = express();
const PORT = config.port || 5000;

app.get('/hello', (req, res) => {
  console.log('into server by get');
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log('config.port: ', config.port)
  console.log(`Server listening on port ${PORT}`);
});