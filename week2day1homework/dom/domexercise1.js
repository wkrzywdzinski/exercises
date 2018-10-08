function changeStyle(selector) {
    var sel = document.querySelectorAll(selector);
    for (var i = 0; i < sel.length; i++) {
        sel[i].style.fontStyle = "italic";
        sel[i].style.textDecoration = "underline";
        sel[i].style.fontWeight = "bold";
    }
}
