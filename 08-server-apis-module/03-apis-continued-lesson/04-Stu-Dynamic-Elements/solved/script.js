// Adding click event listen listener to all buttons
$("button").on("click", function () {
  // Grabbing and storing the data-animal property value from the button
  var animal = $(this).attr("data-animal");

  // Constructing a queryURL using the animal name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=[place-api-key-here]&limit=10";

  // Performing an Fetch request with the queryURL
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    // After data comes back from the request
    .then(function (data) {
      console.log(queryURL);

      console.log(data);
      // storing the data from the Fetch request in the results variable
      var results = data.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {

        // Creating and storing a div tag
        var animalDiv = $("<div>");

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
        var animalImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        animalImage.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and image tag to the animalDiv
        animalDiv.append(p);
        animalDiv.append(animalImage);

        // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        $("#gifs-appear-here").prepend(animalDiv);
      }
    });
});
