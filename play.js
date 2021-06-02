const net = require('./client').net;
const connect = require('./client').connect;

connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function () {
  // your code here
};


stdin.on("data", handleUserInput);
