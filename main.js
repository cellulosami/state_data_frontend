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

function renderMap(stateData) {
  var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('test'),
    geographyConfig: {
      highlightBorderColor: '#209ba4',
      highlightFillColor: '#33cdd8',
      popupTemplate: function (geography, data) {
        return `<div class="hoverinfo"> <strong>` + geography.properties.name + `</strong><br/> 
        Electoral Votes: ` + data.state + ` <br/>
        Median Household Income: `;
      },
      highlightBorderWidth: 3
    },
    data: stateData
  });
  election.labels();
}


axios
  .get("http://localhost:3000/api/states/frontend")
  .then(response => {
    console.log(response.data);
    renderMap(response.data);
  })
  .catch(error => {
    console.log(error);
    console.log(error.response.statusText);
  });