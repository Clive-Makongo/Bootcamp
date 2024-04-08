console.log("Hello");

var playerScore = 0;
var compScore = 0;
var round = 0;

var rpsArr = ["Rock", "Paper", "Scissors"];

function play() {
  console.log(compScore, playerScore, round);
  round++;

  confirm("Are you ready to play?");
  var compChoice = getRandInt(2);

  var playerChoice = prompt(
    "Pick your choice: 0 = Rock, 1 = Paper, 2 = Scissors"
  );

  alert(
    "Your Choice: " +
      rpsArr[playerChoice] +
      "\n " +
      " Computers Choice: " +
      "\n " +
      rpsArr[compChoice]
  );

  if (playerChoice == compChoice) {
    console.log("draw" + compChoice, playerChoice);

    playerScore++;
    compScore++;
    alert(
      "Draw! Your Score: " +
        playerScore +
        "\n " +
        "My Score: " +
        "\n " +
        compScore +
        "Round: " +
        round
    );
  } else if (
    (playerChoice == 0 && compChoice == 1) ||
    (playerChoice == 1 && compChoice == 2) ||
    (playerChoice == 2 && compChoice == 0)
  ) {
    console.log("lose" + compChoice, playerChoice);
    compScore++;
    alert(
      "You Lose! Your Score: " +
        playerScore +
        "\n " +
        "My Score: " +
        compScore +
        "\n " +
        "Round: " +
        round
    );
  }
  // (playerChoice == 0 && compChoice == 2) ||
  // (playerChoice == 1 && compChoice == 3) ||
  // (playerChoice == 2 && compChoice == 1)
  else {
    playerScore++;

    console.log("win" + compChoice, playerChoice);
    alert(
      "You Win! Your Score: " +
        playerScore +
        "\n " +
        "My Score: " +
        compScore +
        "\n " +
        "Round: " +
        round
    );
    }

    var playAgain = confirm('Play Again?');
    
    if (playAgain) {
        play();
    }
}

play();



console.log(compScore, playerScore, round);

function getRandInt(max) {
  return Math.floor(Math.random() * max);
}
