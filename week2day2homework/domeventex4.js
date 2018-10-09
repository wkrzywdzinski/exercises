var outbox = document.getElementById("outbox");
var inbox = document.getElementById("inbox");
function rgbColors() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }

    return rgbArr;
}
outbox.addEventListener("click", function() {
    var rgb = rgbColors();
    outbox.style.background =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});
inbox.addEventListener("click", function(e) {
    var rgb = rgbColors();
    e.stopPropagation();
    inbox.style.background =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});
