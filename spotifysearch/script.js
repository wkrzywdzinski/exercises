var input = $("input");
var search = $("#search");
var album = $("#album");
var next = $("#next");
var offsetval = 0;
var bigboxresults = $("#bigboxresults");
search.on("click", function(e) {
  var resultsHTML = "";
  $.ajax({
    url: "https://elegant-croissant.glitch.me/spotify",
    data: {
      q: input.val(),
      type: $("select").val()
    },
    success: function(data) {
      data = data.artists || data.albums;
      if (data.next) {
        next.show();
        offsetval += 20;
      }
      for (var i = 0; i < data.items.length; i++) {
        if (!data.items[i].images[0]) {
          var image =
            "https://www.dekelltd.com/wp-content/themes/dekelltd/images/icons/noImg.png";
        } else {
          image = data.items[i].images[0].url;
        }
        resultsbegin =
          '<div class="resultbox" id="title"> Results for ' +
          input.val() +
          "</div>";
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
      if (resultsHTML == "") {
        bigboxresults.html(
          '<div class="resultbox" id="title">NO RESULTS</div>'
        );
      }
      bigboxresults.html(resultsbegin + resultsHTML);
    }
  });
});
next.on("click", function(e) {
  console.log("click");
  var resultsHTML = "";
  $.ajax({
    url: "https://elegant-croissant.glitch.me/spotify",
    data: {
      q: input.val(),
      type: "artist",
      offset: offsetval
    },
    success: function(data) {
      data = data.artists;
      if (data.next) {
        next.show();
        offsetval += 20;
      } else {
        next.hide();
      }
      for (var i = 0; i < data.items.length; i++) {
        if (!data.items[i].images[0]) {
          var image =
            "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg";
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

      bigboxresults.append(resultsHTML);
    }
  });
});
