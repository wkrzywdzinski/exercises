var menu = document.querySelector(".sidemenu");
var burger = document.getElementById("burger");
var xxx = document.getElementById("xxx");
burger.addEventListener("click", function() {
    menu.classList.add("afterclick");
});
xxx.addEventListener("click", function() {
    menu.classList.remove("afterclick");
});
