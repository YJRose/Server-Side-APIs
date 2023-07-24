var APIKey = "149f9faa2762053fe5df6b963ed2165b";
var cityName = document.querySelector("#city");
var stateCodeE1 = document.querySelector("#statecode");
var countryName = document.querySelector("#country");
var SearchBtn = document.querySelector("#search");

var todayweatherE1 = document.querySelector(".todayweather");
var imgE1 = document.querySelector(".img");
var degfE1 = document.querySelector(".temp");

SearchBtn.addEventListener("click", function getAPI(event) {
  // Prevent the default behavior
  event.preventDefault();



  cityName = document.querySelector("#city").value;
  stateCodeE1 = document.querySelector("#statecode").value;
  countryName = document.querySelector("#country").value;
  var queryURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "," + stateCodeE1 + "," + countryName + "&appid=" + APIKey;
  //get city lat and long
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var cityNameE1 = data[0].name;
      var cityLat = data[0].lat;
      var cityLng = data[0].lon;
      localStorage.setItem("Searchhistory", [cityNameE1, cityLat, cityLng]);

      var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLng + "&appid=" + APIKey + "&units=imperial";
      //get weather data
      return fetch(weatherURL);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].main.temp);



      var weathericon = document.createElement("IMG");
      var iconE1 = data.list[0].weather[0].icon;
      var attr = document.createAttribute("class");
      attr.value = "iconW1";
      weathericon.setAttributeNode(attr);
      weathericon.setAttribute("src", "./img/" + iconE1 + "@2x.png");
      imgE1.appendChild(weathericon);


      var weatherE1 = document.createElement("p");
      var attr1 = document.createAttribute("class");
      attr1.value = "pW1";
      weatherE1.setAttributeNode(attr1);
      weatherE1.textContent = data.city.name + "  " + data.list[0].main.temp + "°F";
      degfE1.appendChild(weatherE1);


    });

  historyBtn();
  //Clear input fields
  document.querySelector("#city").value = "";
  document.querySelector("#statecode").value = "";
  document.querySelector("#country").value = "";

});

function historyBtn() {

}

function removedata(){

  document.querySelector("#iconW1").remove();
  document.querySelector("#pW1").remove();
}





