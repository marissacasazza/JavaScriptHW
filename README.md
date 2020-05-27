# JavaScriptHW

Level 1: Automatic Table and Date Search <BR>
<CODE>
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

)</CODE>


<h2>Challenges</h2>
<body>During this homework, I found myself getting caught up in multple ways to achieve the same goal - which ultimately confused me. Originally my code was way too long and started to get messy. When I took a step back and realized how simple the code could be, that is when I was able to successfully filter the data set using the click event. </body>

