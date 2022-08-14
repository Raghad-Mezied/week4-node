const http = require("http");
const router = require("./router");

const server = http.createServer(router);

const port = 3000;

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
