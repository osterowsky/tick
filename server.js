const express = require('express');
const app = express();
const port = 3000;


// Serve static files from the "src directory
app.use(express.static('src'));


// Serve the landing page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/static/index.html');
});

// Serve the demo page
app.get('/demo', (req, res) => {
  res.sendFile(__dirname + '/src/static/demo.html');
});

// Serve the checkout page
app.get('/checkout', (req, res) => {
  res.sendFile(__dirname + '/src/static/checkout.html');
})

// Serve the thank you page
app.get('/thank-you', (req, res) => {
  res.sendFile(__dirname + '/src/static/thank-you.html');
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });