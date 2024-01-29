const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config();
if (process.env.NODE_ENV) {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
  console.log(`${process.env.NODE_ENV}`)
}

const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || 'http://localhost';
const common = process.env.COMMON_VARIABLE;
const environment_name = process.env.ENVIROMENT_NAME;

app.get('/hello', (req, res) => {
    res.send(`Hello World! - ${common} - ${environment_name}`);
});

app.get('/bye', (req, res) => {
    res.send('Goodbye World!');
});

app.listen(port, () => {
    console.log(`API escuchando en ${baseUrl}:${port}`);
});