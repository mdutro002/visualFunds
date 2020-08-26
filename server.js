const express = require('express');
const app = express();

PORT = 3000;

const calcInterest = (principle, interestrate, time) => {
  //A = P(1 + r/n)^(nt)
  //Pemdas operations:
  //divide the annual interest rate (r) by the number of times the interest is componded (n)
  //
}

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})


