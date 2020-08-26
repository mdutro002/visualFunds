const express = require('express');
const app = express();
const path = require('path');

PORT = process.env.PORT || 4520;
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'app/index.html'));
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})


