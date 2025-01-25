import express from 'express'; // Use 'import' for ESM
import authRoute from './routes/auth.js'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(express.json());


app.use(express.urlencoded({ extended: true }));
app.use('/api',authRoute);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3000');
});


