function invertCase(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase()) {
            result += string[i].toLowerCase();
        } else {
            result += string[i].toUpperCase();
        }
    }
    return result;
}
