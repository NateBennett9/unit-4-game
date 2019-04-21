var crystal = {
    blue:{
      name: "blue",
      value: 0
    },
    green:{
      name: "green",
      value: 0
    },
    red:{
      name: "red",
      value: 0
    },
    yellow:{
      name: "yellow",
      value: 0
    }
  };
  
  var score = 0;
  var goal = 0;
  var wins = 0;
  var losses = 0;
  
  var beginGame = function() {
    score = 0;
    goal = Math.floor(Math.random() * 102) + 19;
    crystal.blue.value = Math.floor(Math.random() * 12) + 1;
    crystal.red.value = Math.floor(Math.random() * 12) + 1;
    crystal.green.value = Math.floor(Math.random() * 12) + 1;
    crystal.yellow.value = Math.floor(Math.random() * 12) + 1;
    $("#score").html(score);
    $("#goal").html(goal);
  };
  
  var isWin = function() {
    if (score > goal) {
      alert("Loser!");
      losses++;
      $("#losses").html(losses);
      beginGame();
    }
    else if (score === goal) {
      alert("Winner!");
      wins++;
      $("#wins").html(wins);
      beginGame();
    }
  };

  var appendValue = function(selectedCrystal) {
    score += selectedCrystal.value;
    $("#score").html(score);
    isWin();
  };

  beginGame();
  
  $("#blue").on("click", function() {
    appendValue(crystal.blue);
  });
  $("#red").on("click", function() {
    appendValue(crystal.red);
  });
  $("#green").on("click", function() {
    appendValue(crystal.green);
  });
  $("#yellow").on("click", function() {
    appendValue(crystal.yellow);
  });
  