const server = require("./app");
const port = 3000;

server.listen(port, () =>
  console.log(`Express listening on server port ${port}`)
);
