//Business Logic
var roundScorep1 = 0;
var roundScorep2 = 0;
var gameScorep1 = 0;
var gameScorep2 = 0;
var landsOn = 0;
var players = ["p1", "p2"];
var currentPlayer = '';
var i = 0;


function roll() {
  landsOn = Math.floor(Math.random() *6) + 1;
};
function active() {
  while (landsOn == 1) {
    if (i == 0) {
      i = i + 1;
    }
    else if (i == 1) {
      i = i - 1;
    }
    break;
  }
  currentPlayer = players[i];
};
function round() {
  var thisRoundp1 = 0;
  var thisRoundp2 = 0;

  if(landsOn !== 1 && currentPlayer == players[0]) {
    roundScorep1 = roundScorep1 + landsOn;
  }
  else if(landsOn !== 1 && currentPlayer == players[1]) {
    roundScorep2 = roundScorep2 + landsOn;
  }
  else {
    roundScorep1 = 0;
    roundScorep2 = 0;
  }

  // for (var i = 0; i < thisRoundp1.length; i++) {
  //   roundScorep1 = roundScorep1 + thisRoundp1[i];
  // }
};
// function game() {
//   var thisGame = [];
// }
// function reset() {
//
// }


//User Interface Logic
$(document).ready(function() {
  $("#roll").click(function() {
    alert(i);
    round();
    active();
    roll();
    if(currentPlayer == "p1") {
      $("#p1roll").text("Roll: " + landsOn);
    }
    else{
      $("#p2roll").text("Roll: " + landsOn);
    }  });

    $("#hold").click(function() {
      round();
    if(currentPlayer == "p1") {
      $("#p1round").text("Roll: " + roundScorep1);
    }
    else{
      $("#p2round").text("Roll: " + roundScorep2);
    }  });
});
