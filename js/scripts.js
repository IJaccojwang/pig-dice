//Business Logic
var players = ["p1", "p2"];
var currentPlayer = "p1";
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


function turn() {
  if (i == 0) {
    i = i + 1;
  } else {
    i = i - 1;
  }
  thisRound = [0];
  currentPlayer = players[i];
};

function sum() {
  if (currentPlayer == "p1") {
    roundScorep1 = thisRound.reduce((sum, num) => sum + num);
  } else {
    roundScorep2 = thisRound.reduce((sum, num) => sum + num);
  }
};

function round() {
  if(landsOn !== 1) {
    thisRound.push(landsOn);
    sum();
  }
  else{
    $('#oops-' + currentPlayer).show();
    turn();
    background();
    sum();
  }
};

function game() {
  if (currentPlayer == "p1") {
    gameScorep1 += roundScorep1;
  }
  else if (currentPlayer = "p2") {
    gameScorep2 += roundScorep2;
  }
  else {
    alert("Please restart");
  }
};

function roundReset() {
  $("#p1round").text("Round: 0");
  $("#p2round").text("Round: 0");
  $("#p1roll").text("This roll: 0");
  $("#p2roll").text("This roll: 0");
}

function gameReset() {

}

function background() {
  if (currentPlayer == "p2") {
    $("#player1").css("background-color", "rgba(0, 0, 0, 0.5)");
    $("#player2").css("background-color", "rgba(255, 255, 255, 0.8)")
  } else {
    $("#player2").css("background-color", "rgba(0, 0, 0, 0.5)");
    $("#player1").css("background-color", "rgba(255, 255, 255, 0.8)")
  }
}


//User Interface Logic
$(document).ready(function() {
  $("#roll").click(function() {
    roll();
    $(".dice").empty().append("<img src='img/dice"+ landsOn + ".png' alt='dice' width='100%'>");
    $("#lands").text(landsOn);
    // if (currentPlayer == "p1") {
    //   $("#p1roll").text("This roll: " + landsOn);
    // } else {
    //   $("#p2roll").text("This roll: " + landsOn);
    // }
    round();
    $("#p1round").text("Round: " + roundScorep1);
    $("#p2round").text("Round: " + roundScorep2);
  });

  $("#hold").click(function() {
    game();
    $("#p1game").text(gameScorep1);
    $("#p2game").text(gameScorep2);
    if (gameScorep1 >= 100 || gameScorep2 >=100) {
      alert(currentPlayer + "wins");
      // $(this).prop("diabled", true);
      // $("#roll").prop("diabled", true);
    }
    else {
      turn();
      background();
    }
    roundReset();
  });

  $("#rules").click(function() {
    $(".drop").toggle();
  });
});
