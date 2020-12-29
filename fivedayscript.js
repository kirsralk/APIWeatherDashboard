// This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Function that executes on search click
$("#searchBtn").on("click", function(){
    var userInput = $("#searchInput").val().trim();
    console.log("The user typed: " + userInput);

// Here we are building the URL we need to query the database
var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + APIKey;


// Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
    url: queryURLForecast,
    method: "GET"
    })
  
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

    // Log the resulting object
    console.log(response);
    console.log("Day 1 Temp: " + response.list[0].main.temp);
    
    // // Convert the temp to fahrenheit
    // var tempF = (response.main.temp - 273.15) * 1.80 + 32;        

    // // Transfer content to HTML
    // $("#cityName").html("<h2>" + response.name + " (" + today + ")");
    // $("#tempDiv").text("Temperature: " + tempF.toFixed(1) + "°F");
    // $("#humDiv").text("Humidity: " + response.main.humidity + "%");
    // $("#windDiv").text("Wind Speed: " + response.wind.speed + " MPH");
  
    // // Log the data in the console as well
    // console.log("Wind Speed: " + response.wind.speed);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temperature (F): " + tempF);

    // console.log("at line 48 the user typed: " + userInput);
    // console.log("latitude: " + response.coord.lat);
    // console.log("longitude: " + response.coord.lon);

    // var locationLat = response.coord.lat;
    // var locationLon = response.coord.lon;

    });
});


