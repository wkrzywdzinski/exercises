function backwards(arr) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        ret.unshift(arr[i]);
    }
    return ret;
}
