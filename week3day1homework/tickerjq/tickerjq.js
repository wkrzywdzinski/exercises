(function() {
  var elem = $("#headlines");
  var links = $("a");
  var animId;

  var left = elem.offset().left;
  function moveHeadlines() {
    left--;

    if (left <= 0 - links.eq(0).outerWidth()) {
      left += links.eq(0).outerWidth();
      elem.append(links.eq(0));
      links = $("a");
    }
    elem.css("left", left + "px");

    animId = requestAnimationFrame(moveHeadlines);
  }
  $("a").on("mouseover", function(e) {
    cancelAnimationFrame(animId);
    event.target.style.color = "blue";
    event.target.style.textDecoration = "underline";
  });
  $("a").on("mouseleave", function(e) {
    event.target.style.color = "white";
    event.target.style.textDecoration = "none";
    moveHeadlines();
  });
  moveHeadlines();
})();
