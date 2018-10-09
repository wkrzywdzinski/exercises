function rgbColors() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }

    return rgbArr;
}
var magicbox = document.getElementById("box");
magicbox.addEventListener("mousedown", function() {
    var rgb = rgbColors();
    magicbox.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});
magicbox.addEventListener("mouseup", function() {
    var rgb = rgbColors();
    magicbox.style.background =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});
