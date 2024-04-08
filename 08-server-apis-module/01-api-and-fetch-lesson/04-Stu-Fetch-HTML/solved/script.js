// The below code fills in the first row of the table
var movie = "Dune";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

fetch(queryURL)
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    // Create a new table row element
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(data.Title);
    var yearTd = $("<td>").text(data.Year);
    var actorsTd = $("<td>").text(data.Actors);

    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
  });


movie = "The Little Mermaid";
queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

fetch(queryURL)
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    // Create a new table row element
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(data.Title);
    var yearTd = $("<td>").text(data.Year);
    var actorsTd = $("<td>").text(data.Actors);

    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
  });

movie = "The Lion King";
queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

fetch(queryURL)
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    // Create a new table row element
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(data.Title);
    var yearTd = $("<td>").text(data.Year);
    var actorsTd = $("<td>").text(data.Actors);

    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
  });
