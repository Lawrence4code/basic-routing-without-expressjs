console.log('Starting app.js file');                           // printed when the file in run

const http = require('http');                                  // require http

const hostname = '127.0.0.1';                                  // creating a variable and defining the host name
const port = 3000;                                             // defining the port

const server = http.createServer((req, res) => {               // creating a variable server and creating the server
  res.statusCode = 200;                                        // response status code when success 
  res.setHeader('Content-Type', 'text/plain');                 // content type of the data sent back based on request
  res.end('Hello World\n');                                    // sent out content and end the response
});

server.listen(port, hostname, () => {                          // server listening to the defined port
  console.log(`Server running at http://${hostname}:${port}/`);// message printed when server is run
});