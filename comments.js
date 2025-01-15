// Create web server
const express = require('express');
const app = express();
const port = 3000;

// import comments array
const comments = require('./comments.js');

// set static folder
app.use(express.static('public'));

// create get route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
