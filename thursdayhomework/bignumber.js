function bignumber(num) {
    if (num <= 0 || isNaN(num)) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        while (num < 1000000) {
            num *= 10;
        }
        return num;
    }
}
