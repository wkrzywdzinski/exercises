function getWithClass(classname) {
    var result = [];
    var classy = document.getElementsByClassName(classname);
    for (var i = 0; i < classy.length; i++) {
        result.push(classy[i]);
    }
    return result;
}
