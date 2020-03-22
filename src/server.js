const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.sendStatus(404);
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening at ${port}`));