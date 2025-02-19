const http = require('http');

const server = http.createServer((req, res) => {
  // Improved error handling
  try {
    // Simulate an error
    const data = JSON.parse('invalid json');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from server!' }));
  } catch (error) {
    // Log the detailed error and send a detailed error message to client
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});