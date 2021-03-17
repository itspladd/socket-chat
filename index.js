const express = require('express');
const app = express();
const http = require('http');
const srv = http.createServer(app);



const PORT = 8080;

app.get('/', (req, res) => {
  res.send('<h1>Howdy BOR</h1>');
});

srv.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});