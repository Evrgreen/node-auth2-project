const server = require('./api/server.js');
const PORT = process.env.PORT || 14500;

server.listen(PORT, () => {
  console.log(
    `\n ${Date(Date.now())} \n Server Started on http://localhost:${PORT}`,
  );
});
