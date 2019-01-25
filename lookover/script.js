const view = $("#view");
const view2 = $("#view2");
const viewposition = view.position();
const view2position = view2.position();
var viewleft = viewposition.left;
var view2left = view2position.left;
$(document).on("keydown", function(e) {
  if (view2left == 0) {
  }
  if (e.which == 65 || e.which == 37) {
    viewleft = viewleft - 5;
    view2left = view2left - 5;
    view.css("left", viewleft + "px");
    view2.css("left", view2left + "px");
  } else if (e.which == 68 || e.which == 39) {
    viewleft = viewleft + 5;
    view2left = view2left + 5;
    view.css("left", viewleft + "px");
    view2.css("left", view2left + "px");
  }
});
