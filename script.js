var APIKey = "149f9faa2762053fe5df6b963ed2165b";
var cityName = document.querySelector("#city");
var stateCodeE1 = document.querySelector("#statecode");
var countryName = document.querySelector("#country");

var todayweatherE1 = document.querySelector(".todayweather");


var SearchBtn = document.querySelector("#search");

SearchBtn.addEventListener("click", function getAPI(queryURL) {

  cityName = cityName.value;
  stateCodeE1 = stateCodeE1.value;
  countryName = countryName.value;
  var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName +"," + stateCodeE1 +","+ countryName + "&limit=1&appid=" + APIKey;
  
  fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
});

});