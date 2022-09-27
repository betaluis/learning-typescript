"use strict";
// Return types
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
function addAndHandle(a, b, cb) {
    let result = a + b;
    cb(result);
}
addAndHandle(2, 5, (answer) => {
    console.log(answer);
});
