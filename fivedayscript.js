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

            //Display today's date next to result
            var epochToday = response.list[0].dt;
            var myToday = new Date(epochToday * 1000);
            var myTodayRead = myToday.toLocaleDateString();
            // console.log(myDateRead); 
            $("#cityName").html("<h2>" + userInput + " (" + myTodayRead + ")");

            // Add weather icon to today's title (outside for loop)
            var iconCodeToday = response.list[0].weather[0].icon;
            var iconTodayURL = "http://openweathermap.org/img/w/" + iconCodeToday + ".png";     
            var iconImage = $("<img>");
            iconImage.attr("src", iconTodayURL);
            iconImage.attr("id","weatherIcon");
            $("#mainDiv").append(iconImage);

            // For loop to create 5 cards for forecast

            for (var i = 1; i < 6; i++) {
                // Convert date result from Epoch time to readable time
                var epochDate = response.list[i].dt;
                var myDate = new Date(epochDate * 1000);
                var myDateRead = myDate.toLocaleDateString();
                // console.log(myDateRead); 

                // Save icon data and convert to display png
                var iconCode = response.list[i].weather[0].icon;
                var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";

                // Creating a div for results with the class "card"
                var newCard = $("<div>");
                newCard.attr("class", "card fiveDay");

                // Convert temp to fahrenheit
                var tempF = (response.list[i].temp.day - 273.15) * 1.80 + 32;

                // Creating paragraph tags with forecast data
                var boldDate = $("<h5>").text(myDateRead);
                var tempDay = $("<p>").text("Temp: " + tempF.toFixed(1) + "°F");
                var humDay = $("<p>").text("Humidity: " + response.list[i].humidity + "%");
                var iconDay = $("<img>");
                iconDay.attr("src", iconURL);
                iconDay.attr("style", "width: 50px");

                // Appending the card to the "fiveDay" span
                newCard.append(boldDate);
                newCard.append(iconDay);            
                newCard.append(tempDay);
                newCard.append(humDay);

                $("#fiveDay").append(newCard);
                    
            }

    });
});


