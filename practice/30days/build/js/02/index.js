"use strict";
const createCounter = (n) => {
    return function counter() {
        return n++;
    };
};
const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// Solution using classes
// ----------------------------------
class Counter {
    constructor(n) {
        this.n = n;
        n = this.n;
    }
    increment() {
        return this.n++;
    }
}
const counter2 = new Counter(10);
console.log(counter2.increment());
console.log(counter2.increment());
