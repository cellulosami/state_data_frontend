const axios = require("axios");
const Datamap = require("datamaps");

module.exports = function (n) {
  return n * 111;
};

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

function renderMap(stateData) {
  var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('test'),
    geographyConfig: {
      highlightBorderColor: '#209ba4',
      highlightFillColor: '#33cdd8',
      popupTemplate: function (geography, data) {
        return `<div class="hoverinfo"> <strong>` + geography.properties.name + `</strong><br/> 

        Median household income: $` + data.median_household_income + ` <br/>

        Share of population in metro areas: ` + (data.share_population_in_metro_areas * 100).toFixed(1) + `% <br/>

        Share of population with a high school degree: ` + (data.share_population_with_high_school_degree * 100).toFixed(1) + `% <br/>

        Share of population unemployed seasonally: ` + (data.share_unemployed_seasonal * 100).toFixed(1) + `% `;
      },
      highlightBorderWidth: 3
    },
    data: stateData
  });
  election.labels();
}
