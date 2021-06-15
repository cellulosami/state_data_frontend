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

function prepareMap(stateData) {
  console.log(stateData);
  let abbreviations = Object.keys(stateData);
  console.log(abbreviations);
  let mapData = {};
  renderMap(mapData);
}

function renderMap(mapData) {
  var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('test'),
    geographyConfig: {
      highlightBorderColor: '#209ba4',
      highlightFillColor: '#33cdd8',
      popupTemplate: function (geography, data) {
        return `<div class="hoverinfo"> <strong>` + geography.properties.name + `</strong><br/> 
        Electoral Votes: ` + data.electoralVotes + ` <br/>
        Median Household Income: `;
      },
      highlightBorderWidth: 3
    },
    data: {
      "AZ": {
        "electoralVotes": 5
      },
      "CO": {
        "electoralVotes": 5
      },
      "DE": {
        "electoralVotes": 32
      },
      "FL": {
        "electoralVotes": 29
      },
      "GA": {
        "electoralVotes": 32
      },
      "HI": {
        "electoralVotes": 32
      },
      "ID": {
        "electoralVotes": 32
      },
      "IL": {
        "electoralVotes": 32
      },
      "IN": {
        "electoralVotes": 11
      },
      "IA": {
        "electoralVotes": 11
      },
      "KS": {
        "electoralVotes": 32
      },
      "KY": {
        "electoralVotes": 32
      },
      "LA": {
        "electoralVotes": 32
      },
      "MD": {
        "electoralVotes": 32
      },
      "ME": {
        "electoralVotes": 32
      },
      "MA": {
        "electoralVotes": 32
      },
      "MN": {
        "electoralVotes": 32
      },
      "MI": {
        "electoralVotes": 32
      },
      "MS": {
        "electoralVotes": 32
      },
      "MO": {
        "electoralVotes": 13
      },
      "MT": {
        "electoralVotes": 32
      },
      "NC": {
        "electoralVotes": 32
      },
      "NE": {
        "electoralVotes": 32
      },
      "NV": {
        "electoralVotes": 32
      },
      "NH": {
        "electoralVotes": 32
      },
      "NJ": {
        "electoralVotes": 32
      },
      "NY": {
        "electoralVotes": 32
      },
      "ND": {
        "electoralVotes": 32
      },
      "NM": {
        "electoralVotes": 32
      },
      "OH": {
        "electoralVotes": 32
      },
      "OK": {
        "electoralVotes": 32
      },
      "OR": {
        "electoralVotes": 32
      },
      "PA": {
        "electoralVotes": 32
      },
      "RI": {
        "electoralVotes": 32
      },
      "SC": {
        "electoralVotes": 32
      },
      "SD": {
        "electoralVotes": 32
      },
      "TN": {
        "electoralVotes": 32
      },
      "TX": {
        "electoralVotes": 32
      },
      "UT": {
        "electoralVotes": 32
      },
      "WI": {
        "electoralVotes": 32
      },
      "VA": {
        "electoralVotes": 32
      },
      "VT": {
        "electoralVotes": 32
      },
      "WA": {
        "electoralVotes": 32
      },
      "WV": {
        "electoralVotes": 32
      },
      "WY": {
        "electoralVotes": 32
      },
      "CA": {
        "electoralVotes": 32
      },
      "CT": {
        "electoralVotes": 32
      },
      "AK": {
        "electoralVotes": 32
      },
      "AR": {
        "electoralVotes": 32
      },
      "AL": {
        "electoralVotes": 32
      }
    }
  });
  election.labels();
}


axios
  .get("http://localhost:3000/api/states/frontend")
  .then(response => {
    console.log(response.data);
    prepareMap(response.data);
  })
  .catch(error => {
    console.log("aww");
  });