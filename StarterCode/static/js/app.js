// from data.js

// YOUR CODE HERE!
//Assigning the data to a variable
var tableData = data; 
function datatable(arr){ 
    var tbody = d3.select("tbody") 
    tbody.html("")
    arr.forEach(function (element){ 
        var row = tbody.append("tr") 
    Object.values(element).forEach(function (element){ 
        row.append("td").text(element) }
            ) 
        }); 
    } 
    datatable(tableData)

// Creating the click event
const filterButton = d3.select("#filter-btn")
filterButton.on("click", myFilter)

function myFilter() {
  var userInput = d3.select("#datetime").property("value")
  //console.log(userInput)
  var filterData = tableData.filter(row => row.datetime === userInput);
 // console.log(filterData)
 datatable(filterData)
}

