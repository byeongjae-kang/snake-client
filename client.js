const net = require('net');
const { IP, PORT } = require("./constants");


const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.setEncoding('utf8');//no need to have this line becuase default encoding is utf8.
    conn.write('Name: BK3');
    conn.on('data', (data) => {
      console.log(`server says: ${data}`);
    });
  });
  return conn;
};

module.exports = {
  net,
  connect
};
