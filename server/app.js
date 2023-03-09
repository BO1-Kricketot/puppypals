require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const { createServer } = require('http');
const { Server } = require('socket.io');
require('./db');

const { HOSTNAME } = process.env;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer)

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', router);
io.on('connection', (socket) => {
  console.log('hitting line 22');
  socket.on('post', (message, room) => {
    console.log(message, room);
    socket.to(room).emit('receive-message', message);
  });
  socket.on('join-room', (room, cb) => {
    socket.join(room);
    cb(`you have joined room ${room}`)
  })
});

httpServer.listen(3000, () => {
  // eslint-disable-next-line
  console.log(`Server listening at ${HOSTNAME}:3000`);
})
// app.listen(3000);
// console.log(`Server listening at ${HOSTNAME}:3000`);

