// set ufo data to a var

var ufoData = dataSet;


//build table

function buildTable(ufoData) {
    var table = Plotly.d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < ufoData.length; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(ufoData[i].datetime);
      trow.append("td").text(ufoData[i].city);
      trow.append("td").text(ufoData[i].state);
      trow.append("td").text(ufoData[i].country);
      trow.append("td").text(ufoData[i].shape);
      trow.append("td").text(ufoData[i].comments);
    }
  }

// add event listenter

function handleSort() {
    Plotly.d3.event.preventDefault();

    var search_date = Plotly.d3.select("#datetime").node().value.trim();
    //clear form

    //Plotly.d3.select("#datetime").node().value.trim() = "";
    //return(console.log(search_date));

    // filter data
    filteredData = dataSet.filter(function(ufoData) {
        var sightingDateTime = ufoData.datetime;
        //console.log(sightingDateTime);
        // If true, add the dateTime to the sightingDateTime, otherwise don't add it to sightingDateTime
        return sightingDateTime === search_date;
        console.log(sightingDateTime)
      });
      buildTable(filteredData);

}

// Add event listener for submit button
Plotly.d3.select("#dateInput").on("click", handleSort);

buildTable(ufoData);