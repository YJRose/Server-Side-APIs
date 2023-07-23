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
    
    var weatherURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLng +"&appid=" + APIKey + "&units=imperial";

    return fetch(weatherURL);
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].main.temp);
  
      var degfE1 = document.querySelector(".temp");
      var weatherE1 = document.createElement("p");
      weatherE1.textContent = data.list[0].main.temp +"°F";
      degfE1.appendChild(weatherE1);

      var imgE1 = document.querySelector(".img");
      var weathericon = document.createElement("IMG");
      var iconE1 = data.list[0].weather[0].icon;
      weathericon.setAttribute("src", "./img/"+ iconE1 +"@2x.png");
      imgE1.appendChild(weathericon);
      

});
});
