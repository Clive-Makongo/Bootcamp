 // Initial array of movies
 var movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

 // Function for displaying movie data
 function renderButtons() {

   // YOUR CODE GOES HERE
   for (let i = 0; i < movies.length; i++) {
    $("#buttons-view").append($("<button>").text(movies[i]).attr("data-name", movies[i]));
   }

 }

 // This function handles events where one button is clicked
 $("#add-movie").on("click", function(event) {
  event.preventDefault();
   // YOUR CODE GOES HERE
   $("#buttons-view").append(
     $("<button>")
       .text($("#movie-input").val())
       .attr("data-name", $("#movie-input").val())
   );
   $('#movie-input').val("");

 });

 // Calling the renderButtons function to display the initial list of movies
 renderButtons();