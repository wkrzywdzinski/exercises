var movebox = document.getElementById("movebox");
document.addEventListener("mousemove", function(e) {
    movebox.style.top = e.clientY - 50 + "px";
    movebox.style.left = e.clientX - 50 + "px";
});
