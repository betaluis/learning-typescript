function add(n1, n2, showResult, phrase) {
    var n = n1 + n2;
    if (showResult) {
        console.log(phrase + n);
    }
    else {
        return n1 + n2;
    }
}
var x = 4;
var y = 3;
var show = true;
var words = "The total is: ";
add(x, y, show, words);
