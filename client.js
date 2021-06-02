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
    // setInterval(() => {
    // conn.write('Move: up');
    //
    // }, 500);
    
    
    conn.on('data', (data) => {
      console.log(`server says: ${data}`);
    });
  });
  

  return conn;
};

console.log('connecting ...');
module.exports = {
  net,
  connect
};

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)