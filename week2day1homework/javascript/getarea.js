function Rectangle(w, h) {
    this.getArea = function() {
        return w * h;
    };
}
function Square(h) {
    Rectangle.call(this, h, h);
}
