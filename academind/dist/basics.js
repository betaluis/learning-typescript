"use strict";
function adding(n1, n2, showResult, phrase) {
    let n = n1 + n2;
    if (showResult) {
        console.log(phrase + n);
    }
    else {
        return n1 + n2;
    }
}
const x = 4;
const y = 3;
const show = true;
const words = "The total is: ";
adding(x, y, false, words);
