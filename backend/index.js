import express from 'express'; // Use 'import' for ESM
import db from './db/db';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


