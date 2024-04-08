$(document).ready(function() {

  // Here we are provided an initial array of letters.
  // Use this array to dynamically create buttons on the screen.
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


  // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
  // =================================================================================
  for (let i = 0; i < letters.length - 1; i++) {
    let letterBtn = $("<button>");
    letterBtn.addClass("letter-button", "letter-button-color");
    letterBtn.addClass("letter-button-color");
    letterBtn.attr("data-letter", letters[i]);
    letterBtn.text(letters[i]);
    $("#buttons").append(letterBtn);
  }
  
  $(".letter-button").on("click", function() {
    let fridgeMagnet = $("<div>");
    fridgeMagnet.addClass("letter-fridge-colour");
    fridgeMagnet.text($(this).attr("data-letter"));
    $("#display").append(fridgeMagnet);
  });

  $("#clear").on("click", function() {
    $("#display").empty();
  })

  // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
  // =================================================================================

  // 12. Create an "on-click" event attached to the "#clear" button id.

  // Inside the on-click event...

  // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.

});