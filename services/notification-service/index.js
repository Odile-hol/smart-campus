const http = require('http');
const PORT = process.env.PORT || 3004;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.url === '/health') {
    res.end(JSON.stringify({ status: 'OK', service: 'user-service' }));
  } else {
    res.end(JSON.stringify({ message: 'User Service - Smart Campus ICT' }));
  }
});
server.listen(PORT, () => console.log('user-service port ' + PORT));