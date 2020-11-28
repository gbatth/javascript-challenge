// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

function loadData(){
    tableData.forEach(aliens =>{
        var row = tbody.append("tr")
        columns.forEach(column => {
            if(column =="city" || column =="state"||column =="country"){
                row.append("td").text(aliens[column].toUpperCase())
            }
            else row.append("td").text(aliens[column])
        })
    })

}

loadData()

var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

var filterButton = d3.select("#filter-btn");

var resetButton = d3.select("#reset-btn");

function filterData(){

    d3.event.preventDefault();

    var Datevalue = inputDate.property("value")
    var Cityvalue = inputCity.property("value")
    var Statevalue = inputState.property("value")
    var Countryvalue = inputCountry.property("value")
    var Shapevalue = inputShape.property("value")

    var filteredData = tableData.filter(function(recorded){
        return ((recorded.datetime === Datevalue ||Datevalue == "")&&
                (recorded.city === Cityvalue ||Cityvalue == "")&&
                (recorded.state === Statevalue ||Statevalue == "")&&
                (recorded.country === Countryvalue ||Countryvalue == "")&&
                (recorded.shape === Shapevalue ||Shapevalue == "")
            )
    })


    console.log(filteredData)

    tbody.text("")

    filteredData.forEach(aliens =>{
        var row = tbody.append("tr")
        columns.forEach(column => {
            if(column =="city" || column =="state" ||column =="country"){
                row.append("td").text(aliens[column].toUpperCase())
            }
            else row.append("td").text(aliens[column])
        })
    })
}

filterButton.on("click",filterData)

function resetData(){
    tbody.text("")
    loadData()
    }

resetButton.on("click",resetData)

// YOUR CODE HERE!
