function each(a, fun) {
    if (Array.isArray(a)) {
        for (var i = 0; i < a.length; i++) {
            fun(a[i], i);
        }
    } else if (typeof a === "object") {
        for (var b in a) {
            fun(a[b], b);
        }
    }
}
