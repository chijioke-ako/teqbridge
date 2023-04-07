const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('hello world !!!');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is started ${PORT}`);
});
