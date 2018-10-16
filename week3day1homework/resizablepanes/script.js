var border = $(".border");
var leftbox = $("#leftbox");
var outbox = $("#outbox");
outbox.on("mousedown", function(e) {
  outbox.on("mousemove", function fun1(e) {
    if (e.pageX >= 995) {
      return;
    }
    border.css("left", e.pageX + "px");
    leftbox.css("width", e.pageX + "px");
    outbox.on("mouseup", function() {
      outbox.off("mousemove", fun1);
    });
  });
  e.preventDefault();
});
