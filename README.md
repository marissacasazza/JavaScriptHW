# JavaScriptHW

Level 1: Automatic Table and Date Search <BR>
<CODE>
var tableData = data;
function datatable(arr){
    var tbody = d3.select("tbody")
    arr.forEach(function (element){
        var row = tbody.append("tr")
        Object.values(element).forEach(function (element){
        row.append("td").text(element)
        })
      });
}
datatable(tableData)</CODE>



Level 2: Multiple Search Categories (Optional)


Complete all of Level 1 criteria.


