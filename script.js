var APIKey = "8f9cd3299c5639dbf3b89c4f63f9c9c4";
var city;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid" + APIKey;

fetch(queryURL)
