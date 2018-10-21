var p1wins = 0;
var p2wins = 0;
(function() {
  var victories = [
    [2, 9, 16, 23],
    [1, 8, 15, 22, 29],
    [0, 7, 14, 21, 28, 35],
    [6, 13, 20, 27, 34, 41],
    [12, 19, 26, 33, 40],
    [18, 25, 32, 39],

    [3, 8, 13, 18],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25, 30],
    [11, 16, 21, 26, 31, 36],
    [17, 22, 27, 32, 37],
    [23, 28, 33, 38],

    [18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [30, 25, 20, 15, 10, 5],
    [36, 31, 26, 21, 16, 11],
    [37, 32, 27, 22, 17],
    [38, 33, 28, 23],

    [23, 16, 9, 2],
    [29, 22, 15, 8, 1],
    [35, 28, 21, 14, 7, 0],
    [41, 34, 27, 20, 13, 6],
    [40, 33, 26, 19, 12],
    [39, 32, 25, 18]
  ];
  //////////////////////////// VARS
  var p1name = "player1";
  var p2name = "player2";
  var p1type = $("#p1type");
  var currentPlayer = "player1";
  var win = true;
  var music = true;
  $(".column").on("click", function(e) {
    var col = $(e.currentTarget);
    var box = $("#box");
    var slotsInColumn = col.find(".slot");
    ///////////////////////////////////// ADD CLASS
    var i;
    for (i = 5; i >= 0; i--) {
      if (
        !slotsInColumn.eq(i).hasClass("player1") &&
        !slotsInColumn.eq(i).hasClass("player2")
      ) {
        break;
      }
    }
    slotsInColumn.eq(i).addClass(currentPlayer);
    ///////////////////////////////////////////////////// SETUP
    var slotsInRow = $(".row" + i);
    checkforwin(slotsInRow);
    if (win) {
      checkforwin(slotsInColumn);
    }
    if (win) {
      checkforwinb(victories);
    }
    if (win) {
      switchPlayers();
    }
  });
  /////////////////////////// sounds
  $(document).ready(function() {
    var start = document.createElement("audio");
    start.src = "music.mp3";
    start.volume = 0.3;
    start.autoPlay = true;
    start.preLoad = true;
    $("#playbutton").click(function() {
      start.play();
    });
    $("#stopmusic").click(function() {
      if (music) {
        music = false;
        start.pause();
        $("#stopmusic").html("PLAY MUSIC");
      } else {
        music = true;
        start.play();
        $("#stopmusic").html("STOP MUSIC");
      }
    });
  });
  $(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "reset.wav";
    obj.volume = 0.5;
    obj.autoPlay = false;
    obj.preLoad = true;
    $("#resetgame").click(function() {
      obj.play();
    });
  });
  $(document).ready(function() {
    var move = document.createElement("audio");
    move.src = "move.wav";
    move.volume = 0.5;
    move.autoPlay = false;
    move.preLoad = true;
    $(".slot").click(function() {
      move.play();
    });
  });
  var audio = new Audio("win.wav");

  ////////buttons
  $("#againbutton").on("click", function(e) {
    $(".playerbox").html("LET'S PLAY AGAIN. LOSER STARTS ");
    $("#p1wins").html(p1name + " wins: " + "<h1>" + p1wins + "</h2>");
    $("#p2wins").html(p2name + " wins: " + "<h1>" + p2wins + "</h2>");
    $("h1").css("opacity", 0);
    $("h1").animate({ opacity: "1" }, "fast");
    $(".slot").removeClass("player1");
    $(".slot").removeClass("player2");
    $(".slot").removeClass("winner");
    win = true;
    switchPlayers();
    $("#playagain").hide();
  });
  $("#playbutton").on("click", function(e) {
    $("#start").hide();
  });
  p1type.on("input", function(e) {
    p1name = p1type.val();
    if (
      p1type.val() == "wojciech" ||
      p1type.val() == "david" ||
      p1type.val() == "davidito" ||
      p1type.val() == "falcon666"
    ) {
      p1wins = 9;
    }
  });
  var p2type = $("#p2type");
  p2type.on("input", function(e) {
    p2name = p2type.val();
    if (
      p2type.val() == "wojciech" ||
      p2type.val() == "david" ||
      p2type.val() == "davidito" ||
      p2type.val() == "falcon666"
    ) {
      p2wins = 9;
    }
  });
  $("#resetgame").on("click", function(e) {
    if (currentPlayer == "player1") {
      currentPlayer == "player2";
    }
    if (currentPlayer == "player2") {
      currentPlayer == "player1";
    }
    if (currentPlayer == "player1") {
      $(".playerbox").html("MISCLICK? " + p1name + " STARTS");
      $(".playerbox").css("background", "Gainsboro");
    } else if (currentPlayer == "player2") {
      $(".playerbox").html("MISCLICK? " + p2name + " STARTS");
      $(".playerbox").css("background", "yellow");
    }
    $(".slot").removeClass("player1");
    $(".slot").removeClass("player2");
  });

  //////////////////////////////////
  function checkforwin(a) {
    var result = "";
    for (var i = 0; i < 6; i++) {
      if (a.eq(i).hasClass(currentPlayer)) {
        a.eq(i).addClass("winner");
        result += "1";
      } else {
        result += "0";
      }
    }
    if (result.indexOf("1111") == -1) {
      $(".slot").removeClass("winner");
    }
    if (result.indexOf("1111") > -1) {
      if (currentPlayer == "player1") {
        $(".playerbox").html("PRETTY SNEAKY. " + p1name + " WINS");
        audio.play();
        p1wins++;
        $("#playagain")
          .delay(1000)
          .show(0);
        win = false;
      }
      if (currentPlayer == "player2") {
        audio.play();
        p2wins++;
        $(".playerbox").html("PRETTY SNEAKY. " + p2name + " WINS");
        $("#p2wins").html(p2name + " wins: " + "<h1>" + p2wins + "</h1>");
        $("#playagain")
          .delay(1000)
          .show(0);
        win = false;
      }
    }
  }
  function checkforwinb(arr) {
    var resultb = "";
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if (
          $(".slot")
            .eq(arr[i][j])
            .hasClass(currentPlayer)
        ) {
          $(".slot")
            .eq(arr[i][j])
            .addClass("winner");
          resultb += "1";
        } else {
          resultb += "0";
          if (resultb.indexOf("1111") == -1) {
            $(".slot").removeClass("winner");
          }
        }

        if (resultb.indexOf("1111") > -1) {
          if (currentPlayer == "player1") {
            audio.play();
            $(".playerbox").html("PRETTY SNEAKY. " + p1name + " WINS");
            p1wins++;
            $("#p1wins").html(p1name + " wins: " + p1wins);
            $("#playagain")
              .delay(1000)
              .show(0);
            win = false;

            return;
          }
          if (currentPlayer == "player2") {
            audio.play();
            $(".playerbox").html("PRETTY SNEAKY. " + p2name + " WINS");
            p2wins++;
            $("#p2wins").html(p2name + " wins: " + p2wins);
            $("#playagain")
              .delay(1000)
              .show(0);
            win = false;
            p2wins++;
            return;
          }
        }
      }
    }
  }

  function switchPlayers() {
    if (currentPlayer == "player1") {
      currentPlayer = "player2";
      $(".playerbox").css("background", "yellow");
      $(".playerbox").html(p2name + "'S TURN");
    } else {
      currentPlayer = "player1";
      $(".playerbox").css("background", "Gainsboro");
      $(".playerbox").html(p1name + "'S TURN");
    }
  }
})();
