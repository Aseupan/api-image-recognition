require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const detectRoute = require('./app/routes/detect.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: '*',
  }),
);

app.get('/', (_, res) => {
  res.send({ message: `Server run on ${PORT}` });
});

detectRoute(app);

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});
