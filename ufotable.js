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

    var search_date = Plotly.d3.select("#dateInput").node().value;
}

buildTable(ufoData);