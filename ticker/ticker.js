(function () {
    var elem = document.getElementById("headlines");
    var links = elem.getElementsByTagName("A");
    var animId;

    var left = elem.offsetLeft;

    function moveHeadlines() {
        left--;

        if (left <= 0 - links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);

            // left is less than or equal to zero minus links[0].offsetWidth
            //l add to left the width of the first link
            // append the first link back to headlines
        }
        elem.style.left = left + "px";
        // change left style property of headlines

        animId = requestAnimationFrame(moveHeadlines);
    }
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function (e) {
            cancelAnimationFrame(animId);
            event.target.style.color = "blue";
            event.target.style.textDecoration = "underline";
        });
        links[i].addEventListener("mouseleave", function (e) {
            event.target.style.color = "white";
            event.target.style.textDecoration = "none";
            moveHeadlines();
        });
    }

    moveHeadlines();
})();