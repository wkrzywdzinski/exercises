(function() {
  var elem = $("#headlines");
  var links = $("a");
  var animId;
  $.ajax({
    url: "/data.json",
    method: "GET",
    data: {
      limit: 20
    },
    success: function(data) {
      var html = "";
      for (var i = 0; i < data.length; i++) {
        html += '<a href="' + data[i].link + '">' + data[i].headline + "</a>";
      }

      elem.html(html);
      links = $("a");
    }
  });
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
  $(document).on("mouseover", "a", function(e) {
    cancelAnimationFrame(animId);
    event.target.style.color = "blue";
    event.target.style.textDecoration = "underline";
  });
  $(document).on("mouseleave", "a", function(e) {
    event.target.style.color = "white";
    event.target.style.textDecoration = "none";
    moveHeadlines();
  });
  moveHeadlines();
})();
