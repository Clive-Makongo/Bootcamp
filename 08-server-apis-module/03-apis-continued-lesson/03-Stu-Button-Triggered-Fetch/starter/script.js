$("button").on("click", function () {
  var person = $(this).attr("data-person");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    person +
    "&api_key=OTkzd5K7wQys7JwYuV3ceOQyoQxG2xbV&limit=10";

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var results = data.data;
      console.log(results,data);

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});