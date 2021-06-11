// // app.js
// const http = require('http');

// // Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {
//   // Set a response type of plain text for the response
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   // Send back a response and end the connection
//   res.end('Hello World!\n');
// });

// // Start the server on port 3000
// app.listen(8080, '127.0.0.1');
// console.log('Node server running on port 8080');



const axios = require("axios");
const Datamap = require("datamaps");

module.exports = function (n) {
  return n * 111;
};

var map = new Datamap({ element: document.getElementById('test') });

axios
  .get("http://localhost:3000/api/states")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log("aww");
  });