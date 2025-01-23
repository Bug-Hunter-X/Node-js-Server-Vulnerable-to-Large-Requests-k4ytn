const http = require('http');
const MAX_REQUEST_SIZE = 1024 * 1024; // 1MB

const server = http.createServer((req, res) => {
  let body = '';
  let requestSize = 0;
  req.on('data', chunk => {
    requestSize += chunk.length;
    if (requestSize > MAX_REQUEST_SIZE) {
      res.writeHead(413, { 'Content-Type': 'text/plain' });
      res.end('Request too large');
      return req.destroy(); //destroy the connection
    }
    body += chunk.toString();
  });
  req.on('end', () => {
    res.writeHead(200);
    res.end('OK');
  });
  req.on('error', (err) => {
    console.error(err);
    res.writeHead(500);
    res.end('Server Error');
  });
});

server.listen(3000);