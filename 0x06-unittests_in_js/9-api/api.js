const express = require('express');
const app = express();

// Existing route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route with validation
app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Fallback for invalid routes
app.get('/cart/*', (req, res) => {
  res.status(404).send('Not Found');
});

const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
