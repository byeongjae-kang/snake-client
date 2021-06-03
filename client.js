const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host:'135.23.222.131',
    port: 50542
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
