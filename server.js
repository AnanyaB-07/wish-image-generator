const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/generate', (req, res) => {
  const { name, occasion, message, theme } = req.body;
  const imageText = `${message}\n— ${name}`;
  // For now, just send back the text. You can later integrate image generation.
  res.send(`<h2>Your Wish Image</h2><div style="border:1px solid #ccc;padding:20px;">${imageText}</div><br><a href="/">Create Another</a>`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
app.get('/canvas', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'canvas.html'));
});
