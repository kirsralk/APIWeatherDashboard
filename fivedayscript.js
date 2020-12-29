// This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Function that executes on search click
$("#searchBtn").on("click", function(){
    var userInput = $("#searchInput").val().trim();
    console.log("The user typed: " + userInput);

// Here we are building the URL we need to query the database
var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + userInput + "&appid=" + APIKey;


// Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
    url: queryURLForecast,
    method: "GET"
    })
  
    // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
            // Store an array of results
            var results = response.list;
            // Log the resulting object in the console
            console.log(results);

            // Log specific data needed for 5 Day Forecast cards
            // console.log(response);
            console.log("Day 1 Temp: " + response.list[0].temp.day);
            console.log("Day 1 Humidity: " + response.list[0].humidity);
            console.log("Day 1 Icon: " + response.list[0].weather[0].icon);

            // Creating a div for results with the class "card"
            var newCard = $("<div>");
            newCard.attr("class", "card");
            newCard.attr("")

            // Creating a paragraph tag with the Temp Min
            var tempMin = $("<p>").text("Temp: " + response.list[0].temp.day);

            // Appending the card to the "fiveDay" span
            newCard.append(tempMin);

            $("#fiveDay").append(newCard);

            
    
    // // Convert the temp to fahrenheit
    // var tempF = (response.main.temp - 273.15) * 1.80 + 32;        

    // // Transfer content to HTML
    // $("#cityName").html("<h2>" + response.name + " (" + today + ")");
    // $("#tempDiv").text("Temperature: " + tempF.toFixed(1) + "°F");
    // $("#humDiv").text("Humidity: " + response.main.humidity + "%");
    // $("#windDiv").text("Wind Speed: " + response.wind.speed + " MPH");
  
    });
});


