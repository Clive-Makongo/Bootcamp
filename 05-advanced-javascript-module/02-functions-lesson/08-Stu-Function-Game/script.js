let player = 0;
let dealer = 0;
let playerTurn = false;
let goal = 21;

function randIntGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function deal() {
  return randIntGen(4, 21);
}

function hit() {
  return randIntGen(2, 11);
}

function blackjack() {
  player += deal();
  dealer += hit();

  console.log("You have: " + player + " and I Have: " + dealer);

  alert("You have: " + player + " and I Have: " + dealer);

  if (player == goal) {
    alert("Blackjack!");
  } else {
    do {
      playerGo();
    } while (playerTurn === true);
  }
}

function playerGo() {
  let hitMe = confirm("HIT?");

  if (hitMe) {
    playerTurn = true;
    player += hit();

    console.log("You have: " + player + " and I Have: " + dealer);

    alert("You have: " + player + " and I Have: " + dealer);

    if (player > goal) {
      alert("BUST You have: " + player + " and I Have: " + dealer);
      playerTurn = false;

      dealerGo();
    } else if (player === goal) {
      alert("Blackjack!");
      dealerGo();
    } else if (player < goal) {
      playerGo();
    } else {
      dealerGo();
    }
  } else {
    dealerGo();
  }
}

function dealerGo() {
  playerTurn = false;
  dealer += hit();

  alert("You have: " + player + " and I Have: " + dealer);

  do {
    dealer += hit();
    alert("You have: " + player + " and I Have: " + dealer);
  } while (dealer < 17);

  if (dealer > goal) {
    alert("Dealer Busts!");
    alert("You have: " + player + " and I Have: " + dealer);
  } else {

    let dealerDistance = goal - dealer;
    let playerDistance = goal - dealer;

    if (playerDistance > dealerDistance) {
      alert(
        "Dealer had " +
          dealer.toString() +
          ".\nYou had " +
          player.toString() +
          ".\nYou Lose :("
      );
    } else if (playerDistance < dealerDistance) {
      alert(
        "Dealer had " +
          dealer.toString() +
          ".\nYou had " +
          player.toString() +
          ".\nYou Win :)"
      );
    } else {
      alert(
        "Dealer had " +
          dealer.toString() +
          ".\nYou had " +
          player.toString() +
          ".\n You Push."
      );
    }
  }
}

blackjack();

//console.log(randIntGen(4,21))
