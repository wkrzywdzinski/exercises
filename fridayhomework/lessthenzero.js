function getLessThanZero(arr) {
    function lessthen(a) {
        if (a < 0) {
            return a;
        }
    }
    var filtered = arr.filter(lessthen);
    return filtered;
}
