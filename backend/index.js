import express from 'express'; // Use 'import' for ESM
const app = express();
import authRoute from './routes/auth'



app.use('./api',authRoute);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


