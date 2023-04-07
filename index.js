const express = require('express');
const pool = require('./db');
const app = express();

app.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM test');
    const results = { results: result ? result.rows : null };
    res.json(results);
  } catch (err) {
    console.error(err);
    res.send('Error ' + err);
  }
});

app.get('/', (req, res) => {
  res.json('hello world !!');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is started ${PORT}`);
});
