const express = require('express');
const app = express();
const path = require('path');

PORT = 4520;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'app/index.html'));
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})


