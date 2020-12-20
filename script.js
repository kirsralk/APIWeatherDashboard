// This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=" + "Seattle" + "&appid=" + APIKey;

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
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $("#tempDiv").text("Temperature: " + tempF);
        $("#windDiv").text("Wind Speed: " + response.wind.speed);
        $("#humDiv").text("Humidity: " + response.main.humidity);
      
        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
      });

// // Separate API call required for UV index
// var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?" +
//   "q=" + "Seattle" + "&appid=" + APIKey;

//       $.ajax({
//         url: queryURL2,
//         method: "GET"
//       })
//         // We store all of the retrieved data inside of an object called "response2"
//         .then(function(response2) {
  
//           // Log the queryURL
//           console.log(queryURL2);
  
//           // Log the resulting object
//           console.log(response2);

//           // Transfer content to HTML
//           $("#humDiv").text("Humidity: " + response.main.humidity);
        
//           // add temp content to html
//           $(".temp").text("Temperature (K) " + response.main.temp);
//           $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
  
//           // Log the data in the console as well
//           console.log("Wind Speed: " + response.wind.speed);
//           console.log("Humidity: " + response.main.humidity);
//           console.log("Temperature (F): " + tempF);
//         });