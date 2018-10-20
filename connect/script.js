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
  var currentPlayer = "player1";
  $(".column").on("click", function(e) {
    var col = $(e.currentTarget);
    var box = $("#box");
    var slotsInColumn = col.find(".slot");

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
    var slotsInRow = $(".row" + i);
    checkforwin(slotsInRow);
    checkforwin(slotsInColumn);
    checkforwinb(victories);

    switchPlayers();
  });
  function checkforwin(a) {
    var result = "";
    for (var i = 0; i < 6; i++) {
      if (a.eq(i).hasClass(currentPlayer)) {
        result += "1";
      } else {
        result += "0";
      }
    }
    if (result.indexOf("1111") > -1) {
      console.log("WIN");
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
          resultb += "1";
        } else {
          resultb += "0";
        }
        if (resultb.indexOf("1111") > -1) {
          console.log("WIN");
          return;
        }
      }
    }
  }
  function switchPlayers() {
    if (currentPlayer == "player1") {
      currentPlayer = "player2";
    } else {
      currentPlayer = "player1";
    }
  }
})();
