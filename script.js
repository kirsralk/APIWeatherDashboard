// This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Function that executes on search click
$("#searchBtn").on("click", function(){
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
    console.log("The first queryURL is: " + queryURL);

    // Log the resulting object
    console.log(response);
    
    // Convert the temp to fahrenheit
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;        

    // Transfer content to HTML

    $("#tempDiv").text("Temperature: " + tempF.toFixed(1) + "°F");
    $("#humDiv").text("Humidity: " + response.main.humidity + "%");
    $("#windDiv").text("Wind Speed: " + response.wind.speed + " MPH");

    // Store latitude and longitude
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
      console.log("the second queryURL is: " + queryURL2);
     
      // add UV content to HTML
      var todayUV = response2.value;
      $("#UVOutput").text(todayUV);
      var badgeUV = $("#UVOutput");

      // If statement to change color of UV badge based on conditions
        if (todayUV < 3) {
          badgeUV.attr("class", "badge bg-success");
        } else if (todayUV > 6 ) {
          badgeUV.attr("class", "badge bg-danger");
        } else {
          badgeUV.attr("class","badge bg-warning");
        }

    }); //End of second .then function
  }); // End of first .then function
}); // End of search button function


