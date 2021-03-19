const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const PORT = 3000;
const userData = {}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('new user: ', socket.id);

  socket.on('chat message', (msg) => {
    io.emit('chat message', `<strong>${userData.username}</strong>: msg`);
  });

  socket.on('set name', name => {
    userData['username'] = name;
    console.log('set name to ', userData.username);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});