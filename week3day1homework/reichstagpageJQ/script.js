var menu = document.querySelector(".sidemenu");
var burger = document.getElementById("burger");
var xxx = document.getElementById("xxx");
burger.addEventListener("click", function() {
  menu.classList.add("afterclick");
});
xxx.addEventListener("click", function() {
  menu.classList.remove("afterclick");
});
var alertoverlay = $("#alertoverlay");
setTimeout(function() {
  alertoverlay.css("zIndex", 10);
}, 2000);
$("#alertx").on("click", function(e) {
  alertoverlay.css("zIndex", -10);
});
