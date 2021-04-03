const express = require('express');

const app = express();

app.route('/')
  .get((_req, res) => {
    res.send('Hello world!');
  });

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
