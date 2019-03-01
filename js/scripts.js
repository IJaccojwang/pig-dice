//Business Logic
var thisRound = 0;
var thisGame = 0;
var landsOn = 0;
var currentPlayer = '';

function roll() {
  landsOn = Math.floor(Math.random() *6) + 1;
};
function active() {
  var players = ["player1", "player2"];
  var i = 0;
  while (landsOn == 1) {
    i = i + 1;
    break;
  }
  currentPlayer = players[i];
};
// function round() {
//   if(landOn != 1) {
//     thisRound = thisRoundound + landsOn;
//   }
//   else {
//     thisRoundound = 0;
//     message in block
//   }
// };
// function reset() {
//
// }


//User Interface Logic
$(document).ready(function() {
  $("#roll").click(function() {
      active();
    roll();
    if(currentPlayer == "player1") {
      $("#p1score").text(landsOn);
    }
    else{
      $("#p2score").text(landsOn);
    }
  });
});
