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
  var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName +"," + stateCodeE1 +","+ countryName + "&appid=" + APIKey;
  
  fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var cityNameE1 = data[0].name;
    var cityLat = data[0].lat;
    var cityLng = data[0].lon;
    localStorage.setItem("Searchhistory", [ cityNameE1, cityLat, cityLng]);
    
    var weatherURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLng +"&appid=" + APIKey;

    return fetch(weatherURL);
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

});
});
