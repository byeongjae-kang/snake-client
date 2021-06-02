const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host:'localhost',
    port: 8888
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

console.log('connecting ...');
connect();