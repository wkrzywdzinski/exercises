(function() {
  var input = $("input");
  var search = $("#search");
  var album = $("#album");
  var next = $("#next");
  var offsetval = 0;
  var bigboxresults = $("#bigboxresults");
  search.on("click", function(e) {
    bigboxresults.html("");
    showresults();
  });
  next.on("click", function(e) {
    showresults();
  });
  function showresults() {
    $.ajax({
      url: "https://elegant-croissant.glitch.me/spotify",
      data: {
        q: input.val(),
        type: $("select").val(),
        offset: offsetval
      },
      success: function(data) {
        var resultsHTML = "";

        data = data.artists || data.albums;
        if (data.next) {
          next.show();
          offsetval += 20;
        } else {
          next.hide();
        }
        for (var i = 0; i < data.items.length; i++) {
          if (!data.items[i].images[0]) {
            var image =
              "https://www.dekelltd.com/wp-content/themes/dekelltd/images/icons/noImg.png";
          } else {
            image = data.items[i].images[0].url;
          }
          resultsHTML +=
            '<div class="resultbox">' +
            '<a href="' +
            data.items[i].external_urls.spotify +
            '">' +
            data.items[i].name +
            "</a>" +
            '<img src="' +
            image +
            '"/>' +
            "</div>";
        }
        if (data.items.length == 0) {
          bigboxresults.html(
            '<div class="resultbox" id="title">NO RESULTS</div>'
          );
        }
        bigboxresults.append(resultsHTML);
        if (location.search.indexOf("scroll=infinite") > -1) {
          checkinf();
          next.hide();
        }
      }
    });
  }
  var setId;
  function checkinf() {
    clearTimeout(setId);
    if (
      $(window).height() + $(document).scrollTop() >=
      $(document).height() - 500
    ) {
      showresults();
    } else {
      setId = setTimeout(checkinf, 1000);
    }
  }
})();
