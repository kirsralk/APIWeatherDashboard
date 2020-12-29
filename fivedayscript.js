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

            var epochDate = response.list[0].dt;
            var myDate = new Date(epochDate *1000);
            console.log(myDate); 

            // Save icon data and convert to display png
            var iconCode = response.list[0].weather[0].icon
            var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";

            // Log specific data needed for 5 Day Forecast cards
            // console.log(response);
            console.log("Day 1 Temp: " + response.list[0].temp.day);
            console.log("Day 1 Humidity: " + response.list[0].humidity);
            console.log("Day 1 Icon: " + response.list[0].weather[0].icon);
            console.log("Epoch date: " + response.list[0].dt);

            // Creating a div for results with the class "card"
            var newCard = $("<div>");
            newCard.attr("class", "card");
            newCard.attr("")

            // Convert temp to fahrenheit
            var tempF = (response.list[0].temp.day - 273.15) * 1.80 + 32;

            // Creating paragraph tags with forecast data
            var tempDay = $("<p>").text("Temp: " + tempF.toFixed(1) + "°F");
            var humDay = $("<p>").text("Humidity: " + response.list[0].humidity + "%");
            var iconDay = $("<img>");
            iconDay.attr("src", iconURL);
            iconDay.attr("style", "width: 50px");

            // Appending the card to the "fiveDay" span
            newCard.append(myDate);
            newCard.append(iconDay);            
            newCard.append(tempDay);
            newCard.append(humDay);

            $("#fiveDay").append(newCard);
  
    });
});


