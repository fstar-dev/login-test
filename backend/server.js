
const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const PORT = 5000;

server.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});