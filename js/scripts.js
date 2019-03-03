//Business Logic
var players = ["p1", "p2"];
var currentPlayer = "";
var i = 0;
var thisRound = [];
var roundScorep1 = 0;
var roundScorep2 = 0;
var gameScorep1 = 0;
var gameScorep2 = 0;
var landsOn = 0;

function roll() {
  landsOn = Math.floor(Math.random() *6) + 1;
};

function current() {
    if (i === 0) {
      i = i + 1;
    }
    else if (i === 1) {
      i = i - 1;
    }
    currentPlayer = players[i];
};

function sum() {
  if (players[0]) {
    roundScorep1 = thisRound.reduce((sum, num) => sum + num);
  } else {
    roundScorep2 = thisRound.reduce((sum, num) => sum + num);
  }
}
function round() {
  if(landsOn !== 1) {
    thisRound.push(landsOn);
    sum();
  }
  else{
    thisRound = [0];
    sum();
    current();
  }
};

function game() {
  if (currentPlayer = "p1") {
    gameScorep1 += roundScorep1;
  }
  else {
    gameScorep2 += roundScorep2;
  }
}




//User Interface Logic
$(document).ready(function() {
  $("#roll").click(function() {
    alert(currentPlayer);
    roll();
    if (currentPlayer = "p1") {
      $("#p1roll").text("This roll: " + landsOn);
    } else {
      $("#p2roll").text("This roll: " + landsOn);
    }
    round();
    $("#p1round").text("Round: " + roundScorep1);
    $("#p2round").text("Round: " + roundScorep2);
  });

  $("#hold").click(function() {
    current();
    game();
    $("#p1game").text("Game: " + gameScorep1);
    $("#p2game").text("Game: " + gameScorep2);
    if (gameScorep1 >= 100 || gameScorep2 >=100) {
      alert(currentPlayer + "wins");
    }
    else {
      alert("passed")
      current();
    }
  });
});
