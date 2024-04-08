// Add your own API key between the ""
var APIKey = "5541009e3ed0526a2a73b1c4ddb284b4";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// We then created an Fetch call
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(queryURL);
    console.log(data);
    console.log(data.main.temp - 273.15);
    $(".city").text(data.name);
    $(".wind").text("wind deg: " + data.wind.deg + " Wind Speed: " + data.wind.speed);
    
    // Create CODE HERE to Log the queryURL
    // Create CODE HERE to log the resulting object
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    // Create CODE HERE to transfer content to HTML
    // Hint: To convert from Kelvin to Celsius: C = K - 273.15
    // Create CODE HERE to dump the temperature content into HTML

  });