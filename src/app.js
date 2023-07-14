const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/boleto', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});