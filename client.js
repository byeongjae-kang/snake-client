const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host:'135.23.222.131',
    port: 50542
  });
  
  conn.on('connect', () => {
    console.log("connected");
    conn.setEncoding('utf8');
    conn.write('Hello from client');
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