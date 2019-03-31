(function() {
  var kitties = document.getElementsByClassName("kittybox");
  var dots = document.getElementsByClassName("dot");
  var curKitty = 0;
  var newKitty = 1;
  var timer;
  var transit = false;

  function moveKitties() {
    transit = true;
    kitties[curKitty].classList.remove("kittyboxin");
    dots[curKitty].classList.remove("dotfilled");
    kitties[curKitty].classList.add("kittyboxout");
    kitties[newKitty].classList.add("kittyboxin");
    dots[newKitty].classList.add("dotfilled");
    curKitty = newKitty;
    newKitty++;
    if (newKitty >= kitties.length) {
      newKitty = 0;
    }
  }
  document.addEventListener("transitionend", function(e) {
    transit = false;
    if (e.target.classList.contains("kittyboxout")) {
      e.target.classList.remove("kittyboxout");
      timer = setTimeout(moveKitties, 5000);
    }
  });

  for (var i = 0; i < dots.length; i++) {
    (function(i) {
      dots[i].addEventListener("click", function(e) {
        if (i == curKitty) {
          return;
        }
        if (transit == true) {
          return;
        }
        clearTimeout(timer);
        newKitty = i;
        moveKitties();
      });
    })(i);
  }

  timer = setTimeout(moveKitties, 5000);
})();
