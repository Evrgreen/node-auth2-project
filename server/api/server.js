const express = require('express');

const cors = require('cors');

const server = express();

const authRouter = require('./routes/auth/authRouter.js');
const userRouter = require('./routes/user/userRouter.js');
const AuthUtils = require('./routes/auth/authUtils');

server.use(cors());
server.use(express.json());
server.use('/api', authRouter);
server.use('/api/users', AuthUtils.authRoute, userRouter);

server.get('/', (req, res) => {
  res.status(200).send('Welcome to the server');
});

module.exports = server;
