// Today's date
var today = moment().format("L");

// This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Function that executes on search click
$("#searchBtn").on("click", function(){
    alert("this button works");
    var userInput = $("#searchInput").val().trim();
    console.log("The user typed: " + userInput);

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey;


// Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
    url: queryURL,
    method: "GET"
    })
  
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);
    
    // Convert the temp to fahrenheit
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;        

    // Transfer content to HTML
    $("#cityName").html("<h2>" + response.name + " (" + today + ")");
    $("#tempDiv").text("Temperature: " + tempF.toFixed(1) + "°F");
    $("#humDiv").text("Humidity: " + response.main.humidity + "%");
    $("#windDiv").text("Wind Speed: " + response.wind.speed + " MPH");
  
    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + tempF);

    console.log("at line 48 the user typed: " + userInput);
    console.log("latitude: " + response.coord.lat);
    console.log("longitude: " + response.coord.lon);

    var locationLat = response.coord.lat;
    var locationLon = response.coord.lon;

    // Separate API call required for UV index
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + locationLat + "&lon=" + locationLon + "&appid=" + APIKey;
   
    $.ajax({
    url: queryURL2,
    method: "GET"
    })

    // We store all of the retrieved data inside of an object called "response2"
    .then(function(response2) {


      // Log the queryURL
      console.log("the second return is: " + queryURL2);

      var locationLat = response2.lat;
      var locationLon = response2.lon;

      // Log the resulting object
      console.log(response2);
      console.log(locationLat);
      console.log(locationLon);
       
      // add UV content to HTML
      $("#UVDiv").text("UV Index: " + response2.value);

      // Log the data in the console as well
      console.log("UV Index: " + response2.value);


    });

});
});


